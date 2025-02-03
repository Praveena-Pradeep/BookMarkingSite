import { useDispatch, useSelector } from 'react-redux';
import { removeBookmark } from '../store/bookmarkSlice';
import { useState } from 'react';
import Navbar from './Navbar';

const BookmarkList = () => {
    const bookmarks = useSelector(state => state.bookmarks);
    const dispatch = useDispatch();
    
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Calculate the total number of pages
    const totalPages = Math.ceil(bookmarks.length / itemsPerPage);

    // Get bookmarks for the current page
    const indexOfLastBookmark = currentPage * itemsPerPage;
    const indexOfFirstBookmark = indexOfLastBookmark - itemsPerPage;
    const currentBookmarks = bookmarks.slice(indexOfFirstBookmark, indexOfLastBookmark);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <Navbar />
            <h2>Your Bookmarks</h2>
            {currentBookmarks.length > 0 ? (
                <ul>
                    {currentBookmarks.map(bookmark => (
                        <li key={bookmark.id}>
                            <a href={bookmark.url} target="_blank" rel="noopener noreferrer">{bookmark.title}</a>
                            <span> (added at: {bookmark.addedAt})</span>
                            <button onClick={() => dispatch(removeBookmark(bookmark.id))}>Delete</button>
                            {/* Placeholder for Edit functionality */}
                            <button onClick={() => alert("Edit functionality not implemented")}>Edit</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No bookmarks available. Add some!</p>
            )}

            <div>
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        disabled={currentPage === index + 1}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default BookmarkList;
