import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { useDispatch, useSelector } from 'react-redux';
import { addBookmark } from '../store/bookmarkSlice';
import Navbar from "./Navbar";
import { useNavigate } from 'react-router-dom';

const BookmarkForm = () => {
    const [url, setUrl] = useState('');
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    const bookmarks = useSelector(state => state.bookmarks);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn); // Adjust based on your auth state
    const navigate = useNavigate();

    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (bookmarks.length < 5) {
            dispatch(addBookmark({ id: Date.now(), url, title, addedAt: new Date().toLocaleString() }));
            setUrl('');
            setTitle('');
            navigate('/BookmarkList'); // Navigate to BookmarkList after adding
        } else {
            alert('You can only add up to 5 bookmarks.');
        }
    };

    return ( 
        <div>
            <Navbar />
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    placeholder="Bookmark Title" 
                    required 
                />
                <input 
                    type="url" 
                    value={url} 
                    onChange={(e) => setUrl(e.target.value)} 
                    placeholder="Bookmark URL" 
                    required 
                />
                <button type="submit">Add Bookmark</button>
            </form>
        </div>
    );
};

export default BookmarkForm;
