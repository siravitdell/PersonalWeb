import { useState } from "react"
import "./projects.css"
import {BsFillArrowRightSquareFill,BsArrowRightSquareFill} from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "../../context";


export default function Projects() {
    const theme  = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    const [currentSlide,setCurrentSlide] = useState(0)
    const data = [
        {
        id: "1",
        title: "Chatcord",
        desc:
            "Group Chat Website ",
        img:
            "https://i.ibb.co/z7P2Snr/chatcord.png",
        link:
            "https://siravitchat-app.herokuapp.com"
    },
    {
        id: "2",
        title: "IoT Project Smart Chili Watering Machine",
        desc:
            "Developed a chili watering machine capable of watering chili plants according to the proper soil moisture",
        img:
            "https://i.ibb.co/3vm3Bh7/iotproject.png",
        link:
            "https://drive.google.com/file/d/1VtGc4LdAo0N_LQURCs2dBRK6RE5PYFLT/view?usp=sharing"
    },
    {
        id: "3",
        title: "Simple Pokedex",
        desc:
            "",
        img:
            "https://i.ibb.co/kQnZVBp/1256.png",
        link:
            "https://siravitmodel.github.io/Pokedex-V1/"
    },
    ]

    const handleClick = (way)=>{
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
        setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }

    return (
        <div className="p" id="projects" style={{backgroundColor: darkMode && "black"}}>
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {data.map(d=>(
                    <div className="containerp">
                        <div className="item" style={{backgroundColor: darkMode && "white"}}>
                            <div className="left">
                                <div className="left-container">
                                    <div className="img-container">
                                    </div>
                                    <h2 style={{color: darkMode && "black"}}>{d.title}</h2>
                                    <p style={{color: darkMode && "black"}}>{d.desc}</p>
                                    <span style={{display:"none"}}>Projects</span>
                                </div>
                            </div>
                            <div className="right">
                                <a href={d.link}
                                    target="_blank" rel="noreferrer">
                                  <img
                                src={d.img}
                                alt=""
                                />  
                                </a>
                                
                            </div>
                        </div>
                    </div>
                ))} 
            </div>
            <BsFillArrowRightSquareFill className="arrow left" id="imgp" onClick={()=>handleClick("left")} size="70px" style={{color: darkMode && "white"}}/>
            <BsArrowRightSquareFill className="arrow right" id="imgp" onClick={()=>handleClick()} size="70px" style={{color: darkMode && "white"}}/>
        </div>
    )
}