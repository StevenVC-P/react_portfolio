import React from "react";
import { Link } from "react-router-dom"
import "./style.css";

function Header () {
    return (
        <header className="text-center">
            <h3>Steven Van Court</h3><h6>Full Stack Programmer</h6>
            <nav className="navbar navbar-expand navbar-light d-flex justify-content-between">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                        to="/"
                        className={
                            window.location.pathname ==="/" || window.location.pathname ==="/about"
                            ? "nav-link active"
                            : "nav-link"
                        }>
                        About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                        to="/projects"
                        className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"
                        }>
                        Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                        to="/resume"
                        className={window.location.pathname === "/resume" ? "nav-link active" : "nav-link"
                        }>
                        Resume
                        </Link>
                    </li>
                </ul>
        </nav>
    </header>
    );
}

export default Header;