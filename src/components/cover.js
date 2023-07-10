import React from "react";
import { ReactDOM } from "react";
import logo from "../img/logo.png";
import svg from "../img/menu.svg"
export default function Cover(){
    return (
    <div className="coverMain">
    <img src={logo} className="logo" alt="hi"></img>
        <nav className="navbarMain">
            <div className="navAnc">
                <a href="#">Home</a>
                <a href="#">Destination</a>
                <a href="#">Camping</a>
                <a href="#">Gallery</a>
                <a href="#">Blog</a>
                <a href="#">Packages</a>
                <a href="#">Contact Us</a>
                <a href="#">Help</a>
            </div>
            <div className="navBut">
                <button>Log-in</button>
                <button>Sign-up</button>
            </div>
        </nav>
        <div className="dropdown"><img src={svg}></img>
            <li className="dropdown-content"><a href="#">Home</a></li>
            <li className="dropdown-content"><a href="#">Destination</a></li>
            <li className="dropdown-content"><a href="#">Camping</a></li>
            <li className="dropdown-content"><a href="#">Gallery</a></li>
            <li className="dropdown-content"><a href="#">Blog</a></li>
            <li className="dropdown-content"><a href="#">Packages</a></li>
            <li className="dropdown-content"><a href="#">Contact Us</a></li>
            <li className="dropdown-content"><a href="#">Help</a></li>
            <li className="dropdown-content"></li>
            <button className="dropdown-content">Log-in</button>
            <button className="dropdown-content">Sign-up</button>
        </div>
        <div className="coverTitle">
            <h1>Find Yourself <br/> Outside</h1>
            <p>
                Book unique camping experiences along with rafting and much more,<br/>dont await and book your slots.
            </p>
            <button>Book Now</button>
        </div>
    </div>
    );

}