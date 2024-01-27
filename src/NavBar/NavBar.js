import "./NavBar.css";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

const NavBar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo" />
            <div className="menu">
                <Link className="navbar-list-item">Home</Link>
                <Link className="navbar-list-item">About</Link>
                <Link className="navbar-list-item">Skills</Link>
            </div>
            <div className="contact-me">
                <span>Contact Me</span>
            </div>
        </nav>
    )
}

export default NavBar;