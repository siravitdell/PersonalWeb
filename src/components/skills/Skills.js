import React from 'react'
import "./skills.css"
import { FaHtml5,FaCss3Alt,FaJs,FaReact,FaBootstrap,FaNodeJs,FaPython,FaGithub,FaPhp,FaGit,FaSass } from "react-icons/fa";
import {SiExpress,SiMongodb,SiSocketdotio} from "react-icons/si";
import 'animate.css';
import { useContext } from "react";
import { ThemeContext } from "../../context";

export default function Skills() {
    const theme  = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className="s" id="skills" style={{backgroundImage: darkMode && "black", backgroundRepeat:darkMode && "none", backgroundSize:darkMode && "cover",backgroundPosition:darkMode && "center"}}>
            <div className="containersk">
                <h1 className="head0">My Skills</h1>
                <h1 className="head1">Advanced</h1>
                <div className="adv">
                    <div className="rowsk ">
                    <div className="cardsk1">
                        <h5 ><FaHtml5 color="#f06529" className="s-icon" size={60}/></h5>
                        <h2 className="skn">HTML</h2>
                    </div>
                    <div className="cardsk1">
                        <h5 ><FaCss3Alt color="#2965f1" className="s-icon" size={60}/></h5>
                        <h2 className="skn">CSS</h2>
                    </div>
                    <div className="cardsk1">
                        <h5 ><FaJs color="yellow" className="s-icon" size={60}/></h5>
                        <h2 className="skn">JAVASCRIPT</h2>
                    </div>
                </div>
                </div>
                <h1 className="head1">Intermediate</h1>
                 <div className="rowsk2">
                    <div className="cardsk4">
                        <h5 ><FaReact color="#61DBFB" className="s-icon" size={60}/></h5>
                        <h2 className="skn">REACTJS</h2>
                    </div>
                    <div className="cardsk4">
                        <h5 ><FaBootstrap color="#563d7c" className="s-icon" size={60} /></h5>
                        <h2 className="skn">BOOTSTRAP</h2>
                    </div>
                    <div className="cardsk4">
                        <h5 ><FaGithub color="white" className="s-icon" size={60}/></h5>
                        <h2 className="skn">GITHUB</h2>
                    </div>
                    <div className="cardsk4">
                        <h5 ><FaNodeJs color="#68a063" className="s-icon" size={60}/></h5>
                        <h2 className="skn">NODEJS</h2>
                    </div>
                    <div className="cardsk4">
                        <h5 ><FaSass color="#cc6699" className="s-icon" size={60}/></h5>
                        <h2 className="skn">SASS</h2>
                    </div>
                </div>
                <h1 className="head1">Basic</h1>
                 <div className="rowsk3">
                    <div className="cardsk4">
                        <h5 ><FaGit color="#f34f29" className="s-icon" size="60px"/></h5>
                        <h2 className="skn">GIT</h2>
                    </div>
                    <div className="cardsk4">
                        <h5 ><FaPython color="#4b84b8" className="s-icon" size="60px"/></h5>
                        <h2 className="skn">PYTHON</h2>
                    </div>
                    <div className="cardsk4">
                        <h5 ><SiSocketdotio color="white" className="s-icon" size="60px"/></h5>
                        <h2 className="skn">SOCKET.IO</h2>
                    </div>
                    <div className="cardsk4">
                        <h5 ><SiMongodb color="#3fa037" className="s-icon" size="60px"/></h5>
                        <h2 className="skn">MONGODB</h2>
                    </div>
                    <div className="cardsk4">
                        <h5 ><SiExpress color="gray" className="s-icon" size="60px"/></h5>
                        <h2 className="skn">EXPRESSJS</h2>
                    </div>
                    <div className="cardsk4">
                        <h5 ><FaPhp color="#787CB5" className="s-icon" size="60px"/></h5>
                        <h2 className="skn">PHP</h2>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
