import './App.css';
import React from 'react';

function Title () {
  return (
    <div id="title">
      <img className="logo" src="https://res.cloudinary.com/aurumtechllc/image/upload/v1658246656/betterforsizing-removebg-preview_sjvdj1.png" alt="Aurum Tech LLC"/>
      <nav>
        <a href="/#blurb">
          <button className="navBtn">About Us</button>
        </a>
      </nav>
    </div>
  );
  }

  
export default Title;