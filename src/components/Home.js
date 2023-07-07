import React from 'react';
import './Home.css';
import homeImage from '../images/homeImage.jpg';

const Home = () => {
    return (
        <div className="container">
            <h1>Welcome to our Website</h1>
            <img src={homeImage} alt="Home className="image />
            <p>Explore our wide range of our products.</p>
        </div>
    );
};

export default Home;