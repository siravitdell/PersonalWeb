import React from 'react'
import "./about.css"
import Bg4 from "../../img/bg4.jpg"
import Me3 from "../../img/1.jpg"
import RoomK from "../../img/roomk.jpg"
import {GitHub,Facebook,Twitter,Instagram} from "@material-ui/icons"
import { useContext } from "react";
import { ThemeContext } from "../../context";

export default function About() {
    const theme  = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className="a" id="about" style={{backgroundColor: darkMode && "black"}}>
            <div className="a-left">
                <div className="row" style={{color: darkMode && "black"}}>
                    <div className="card01">
                        <h1 className="cd1">Siravit Dontumpai</h1>
                    </div>
                    <div className="card02">
                        <p className="cd2">A diligent and enthusiastic information engineering student. <br></br> Passionate about Usability and data analytic.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="card03" style={{backgroundImage:`url(${Me3})`}}>
                    </div>
                </div>
                <div className="row">
                    <div className="card04">
                        <p className="cd4">Information Engineering | ITE
                        </p>
                    </div>
                </div>
            </div>      
            <div className="a-right">
                <div className="row">
                    <div className="card05" style={{backgroundImage:`url(${Bg4})`}}>
                    </div>
                </div>
                <div className="row">
                    <div className="card06">
                        <p className="cd6">Education</p>
                        <p className="cd61">
                            <h4>2019 – Present </h4><br></br> King mongkut’s Institute of Technology Ladkrabang
                        </p>
                        <p className="cd62">
                            <h4>2013 – 2019 </h4>    <br></br>  Nakhonsawan School
                        </p>
                    </div>
                    <div className="card07" style={{backgroundImage:`url(${RoomK})`}}>
                    </div>
                </div>
                <div className="row">
                    <div className="card08"><a href="https://twitter.com/deltaalphatah" target="_blank" rel="noreferrer"><Twitter className="a-icon" /></a></div>
                    <div className="card08"><a href="https://www.facebook.com/siravitdell" target="_blank" rel="noreferrer"><Facebook className="a-icon" /></a></div>
                    <div className="card08"><a href="https://www.instagram.com/mmendelll" target="_blank" rel="noreferrer"><Instagram className="a-icon" /></a></div>
                    <div className="card08" ><a href="https://github.com/siravitmodel" target="_blank" rel="noreferrer"><GitHub className="a-icon1" /></a></div>
                </div>
            </div>       
                
        </div>

    )
}
