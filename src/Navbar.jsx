import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
// import './App.css';

function Navbar () {
    return(
        <nav className="nav">
            <ul>
                <li>
                    <Link className="button" to='/'>Home</Link>
                </li>
                <li>
                    <Link className="button" to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link className="button" to='/portfolio/portfolio'>Portfolio</Link>
                </li>
                <li>
                    <Link className="button" to='/blog'>Blog</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;