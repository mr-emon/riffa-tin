import React from 'react';
import logo from '../images/Riffatin.png';
import'../Header/Header.css';

const Header = () => {
    return (
        <div className="ab">
        <div className="ad">
             <img src={logo} alt=""/>
                <h1>Riffatin</h1>
                </div>
                <br></br>
                
                <nav>
                    <a href="www.google.com">What</a>
                    <a href="www.google.com">Who</a>
                    <a href="wwww.google.com">Why</a>
                    <a href="www.google.com">How</a>
                </nav>
            </div>
           
    );
    
};


export default Header;