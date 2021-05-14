import React from "react";
import { Link } from "react-router-dom"
import Resume from "../../assets/Full Stack Developer - Steven Van Court.pdf"
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
                            window.location.pathname ==="/" || window.location.pathname ==="/react_portfolio" || window.location.pathname ==="/react_portfolio/about"
                            ? "nav-link active"
                            : "nav-link"
                        }>
                        About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                        to="/projects"
                        className={window.location.pathname === "/react_portfolio/projects" ? "nav-link active" : "nav-link"
                        }>
                        Projects
                        </Link>
                    </li>
                    <li class="nav-item"><a class="nav-link" href={Resume} target = "_blank" rel="noopener noreferrer">Resume</a></li>
                </ul>
        </nav>
    </header>
    );
}

export default Header;