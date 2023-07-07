import React from 'react';
import './AboutUs.css';
import aboutImage from '../images/about-image.png';

const AboutUs = () => {
    return (
        <div className="container">
            <h1>About Us</h1>
            <img src={aboutImage} alt="About Us" className="image" />
            <p>Learn more about our company and our mission.</p>
        </div>
    );
};

export default AboutUs;