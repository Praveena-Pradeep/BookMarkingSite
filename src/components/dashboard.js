// src/components/Dashboard.js
import React, { useState } from 'react';

const Dashboard = ({ bookmarks, setBookmarks }) => {
    const [url, setUrl] = useState('');
    const [title, setTitle] = useState('');
    const [error, setError] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);

    const handleAddBookmark = (e) => {
        e.preventDefault();
        setError('');

        if (bookmarks.length >= 5) {
            setError('You can only add up to 5 bookmarks.');
            return;
        }

        const newBookmark = { url, title, time: new Date().toLocaleString() };
        setBookmarks([...bookmarks, newBookmark]);
        clearForm();
    };

    const clearForm = () => {
        setUrl('');
        setTitle('');
        setError('');
        setEditingIndex(null);
    };

    const handleDelete = (index) => {
        const newBookmarks = bookmarks.filter((_, i) => i !== index);
        setBookmarks(newBookmarks);
    };

    const handleEdit = (index) => {
        const bookmark = bookmarks[index];
        setUrl(bookmark.url);
        setTitle(bookmark.title);
        setEditingIndex(index);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedBookmark = { url, title, time: new Date().toLocaleString() };
        const updatedBookmarks = bookmarks.map((bookmark, index) =>
            index === editingIndex ? updatedBookmark : bookmark
        );
        setBookmarks(updatedBookmarks);
        clearForm();
    };

    return (
        <div>
            <h2>Dashboard</h2>
            <form onSubmit={editingIndex !== null ? handleUpdate : handleAddBookmark}>
                <input
                    type="text"
                    placeholder="URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <button type="submit">{editingIndex !== null ? 'Update Bookmark' : 'Add Bookmark'}</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
            <ul>
                {bookmarks.map((bookmark, index) => (
                    <li key={index}>
                        <a href={bookmark.url} target="_blank" rel="noopener noreferrer">{bookmark.title}</a>
                        <span> (added at: {bookmark.time})</span>
                        <button onClick={() => handleEdit(index)}>Edit</button>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
