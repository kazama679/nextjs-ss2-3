import React from 'react';
import './b6.scss'; // Import file Sass
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function B6() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="https://pbs.twimg.com/profile_images/1449990239364075523/xKpVgD6Q_400x400.jpg" alt="logo" />
      </div>
      <ul className="navbar__links">
        <li className="navbar__item"><a href="#home">Home</a></li>
        <li className="navbar__item"><a href="#updates">Updates</a></li>
        <li className="navbar__item"><a href="#services">Services</a></li>
        <li className="navbar__item"><a href="#features">Features</a></li>
        <li className="navbar__item"><a href="#about-us">About Us</a></li>
      </ul>
      <div>
        <FontAwesomeIcon style={{fontSize:"25px"}} icon={faUser}></FontAwesomeIcon>
      </div>
    </nav>
  );
}
