import React from 'react';
import './ContactUs.css';
import contactImage from '../images/contact-us-page.png';

const ContactUs = () => {
    return (
        <div className="container">
            <h1>Contact Us</h1>
            <img src={contactImage} alt="Contact Us" className="image" />
            <p>Feel free to reach out to us for any inquiries or feedback.</p>
        </div>
    );
};

export default ContactUs;