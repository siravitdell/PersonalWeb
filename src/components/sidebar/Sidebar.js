import React from 'react'
import "./sidebar.css"
import Logo from "../../img/logo.png"

export default function Sidebar() {
    return (
        <div className="sidenav">
            <div className="logo">
                <a href="#intro">
                    <img src={Logo} alt="" className="sd-img" /> 
                    <h1>SIRAVIT</h1>
                    <h2>Engineering Student</h2>
                </a>    
            </div>
            <a href="#intro" className="sb">Home</a>
            <a href="#about" className="sb">About</a>
            <a href="#skills"className="sb">Skills</a>
            <a href="#projects"className="sb">Projects</a>
            <a href="#contact"className="sb">Contact</a>
        </div>
    )
}
