import React from 'react'
import "./menubar.css"


export default function Menubar({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu " +(menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#about">About</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#skills">Skills</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#projects">Projects</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            {/* <div className="p">
                <p className="p1">Siravit Dontumpai</p>
                <p className="p2">Model</p>
            </div> */}
        </div>
    )
}
