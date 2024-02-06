import "./NavBar.css";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav>
            <Link to="/" className="name">
                {/* <img src={logo} alt="logo" className="logo" /> */}
                Aijaz Khan.
            </Link>
            <div className="hamburger" onClick={() => {setMenuOpen(!menuOpen)}}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="menu">
                <NavLink to="/" className={menuOpen ? "navbar-list-item open" : "navbar-list-item"}>Home</NavLink>
                <NavLink to="/blog" className={menuOpen ? "navbar-list-item open" : "navbar-list-item"}>Blog</NavLink>
                <NavLink to="/contact" className={menuOpen ? "navbar-list-item open" : "navbar-list-item"}>Contact</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;