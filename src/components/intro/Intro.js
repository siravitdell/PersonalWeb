import React from 'react'
import "./intro.css"
import Me from "../../img/me.png"
import 'animate.css';
import { useContext } from "react";
import { ThemeContext } from "../../context";

export default function Intro() {
    const theme  = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className="i" id="intro">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="animate__animated animate__slideInDown animate__delay-0s" style={{color: darkMode && "white"}}>Hello, I'm </h2>
                    <h1 className="animate__animated animate__slideInLeft animate__delay-0s" id="name" style={{color: darkMode && "white"}}> Siravit Dontumpai</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div id="i-title-item" className="animate__animated animate__slideInUp" style={{color: darkMode && "#FF4C29"}}>Information Engineering</div>
                            <div id="i-title-item1" className="animate__animated animate__slideInUp" style={{color: darkMode && "#FF4C29"}}>Gamer</div>
                        </div>
                    </div> 
                    <div className="btnwrap">
                        <a href="#contact" id="buttonClass"  className="animate__animated animate__fadeIn animate__delay-2s" >Contact me!</a>
                    </div>       
                </div>
                    <a href="#about" id="down" className="animate__animated animate__fadeIn animate__delay-3s">
                        <img src="assets/down.png" alt="" />
                    </a>    
            </div>
            <div className="i-right">
                <div className=" animate__animated animate__slideInRight" id="i-bg1" style={{backgroundColor: darkMode && "#334756"}}></div>
                <img src={Me} alt="" id="i-img" className=" animate__animated animate__fadeIn animate__delay-1s" />
            </div>
        </div>
    )
}