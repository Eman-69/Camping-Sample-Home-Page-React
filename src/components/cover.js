import React from "react";
import { ReactDOM } from "react";
import logo from "../img/logo.png";
export default function Cover(){
    return (
    <div className="coverMain">
        <nav className="navbarMain">
            <div className="navAnc">
                <img src={logo} className="logo" alt="hi"></img>
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