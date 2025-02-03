import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ onLogout }) => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogout = () => {
        // Call the onLogout prop to perform logout action
        onLogout();

        // Redirect to the Home page
        navigate('/register'); // Adjust the path as needed
    };

    return (
        <div>
            <h2>You are logged in</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
