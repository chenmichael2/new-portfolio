import React, { Component } from "react";
import Brand from "./brand/brand";
import "./navbar.css";

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="nav-left"><a href="/"><Brand></Brand></a></div>
                <span className="nav-space"></span>
                <div className="nav-right">
                    <ul className="menu">
                        <li className="menu-item"><a href="/">About</a></li>
                        <li className="menu-item"><a href="/">Resume</a></li>
                    </ul>
                </div>
                
            </nav>
        )
    }
}

export default NavBar;