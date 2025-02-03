import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const backgroundStyle = {
        backgroundImage: `url('https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: 'cover', // Cover the entire area
        backgroundPosition: 'center', // Center the image
        height: '100vh', // Full height of the viewport
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white' // Optional: for better text visibility
    };

    return (
        <div style={backgroundStyle}>
            <h1 style={{ color: "brown"}}><b><u>Welcome to the Personal Bookmarking Site!</u></b></h1><br></br>
            <p><i>Your one-stop solution for managing bookmarks.</i></p>
            <div>
                <h1 style={{ color: "red" }}>Please SignUp here!</h1>
                <NavLink to="/register" className="btn btn-secondary" style={{ marginLeft: '10px' }}>Sign Up</NavLink>
                <p><b>Do you have an Account Please</b></p>
                <NavLink to="/login" className="btn btn-primary" style={{ marginLeft: '10px' }}>Login</NavLink>
            </div>
        </div>
    );
};

export default Home;
