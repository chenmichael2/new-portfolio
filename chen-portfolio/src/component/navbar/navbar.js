import React, { Component } from "react";
import "./navbar.css";

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="nav-left">brand</div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div className="nav-right">
                    <ul className="menu">
                        <li>About</li>
                        <li>Resume</li>
                    </ul>
                </div>
                
            </nav>
        )
    }
}

export default NavBar;