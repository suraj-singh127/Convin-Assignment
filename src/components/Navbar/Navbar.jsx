import React from "react";
import './Navbar.scss'
import logo from './logo.svg'

const Navbar = () => {

    return (
        <nav className="nav-navbar">
            <div className="logo">
                <img src={logo} alt="logo.png" />
            </div>
            <div className="container" onClick={() => { 
                document.querySelector(".container").classList.toggle("change"); 
                document.querySelector(".navbar").classList.toggle("expand");
            }}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <ul className="navbar">
                <li className="navLinks">
                    <a href="https://www.convin.ai/" target="__blank">Services</a>
                </li>
                <li className="navLinks">
                    <a href="https://www.convin.ai/about-us" target="__blank">About Us</a>
                </li>
                <li className="navLinks">
                    <a href="mailto: contact@convin.ai" target="__blank">Contact Us</a>
                </li>
                <li className="navLinks">
                    <a href="https://www.linkedin.com/company/convin/jobs/" target="__blank">Careers</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;