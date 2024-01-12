import React from "react";
import Logo from "../logo.svg";

export default function NavBar() {
    return (
        <nav className="nav">
            <img src={Logo} alt="React Logo"></img>
            <h3 className="react-fact">ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}