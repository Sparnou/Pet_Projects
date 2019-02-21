//React
import React from 'react';
//Styles
import './header.css';

const Header = () => {
    return (
        <header className="app-header">
            <div className="logo-container">
                <a href="https://github.com/">
                    <img src="https://github-grabber.herokuapp.com/images/github-icon.png" alt="logo" className="logo-img"/>
                </a>
            </div>
        </header>
    )
};

export default Header;
