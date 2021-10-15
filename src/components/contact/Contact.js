import React from 'react'
import "./contact.css"
import { useRef, useState } from "react";
import emailjs from 'emailjs-com';
import { useContext } from "react";
import { ThemeContext } from "../../context";
 import Btntotop from "../backtotop/Btntotop.js";
 import "../backtotop/btntotop.css"

export default function Contact() {
    const formRef = useRef()
    const [done, setDone] = useState(false) 
    const handleSubmit = (e) =>{
        e.preventDefault()
        emailjs.sendForm('service_jg359av', 'template_55oasum', formRef.current, 'user_zFVfzqdWhWtdwG4CwoU1n')
        .then((result) => {
          console.log(result.text);
          setDone(true)
        }, (error) => {
          console.log(error.text);
        });
    }
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="c" id="contact" style={{ backgroundColor: darkMode && "black"}}>
            <div className="c-wrapper">
                <div className="c-left">
                    <div className="container">
                       <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.811013090988!2d100.77604361483024!3d13.729888890361622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d664988a1bedf%3A0xcc678f180e221cd0!2z4Liq4LiW4Liy4Lia4Lix4LiZ4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14Lie4Lij4Liw4LiI4Lit4Lih4LmA4LiB4Lil4LmJ4Liy4LmA4LiI4LmJ4Liy4LiE4Li44LiT4LiX4Lir4Liy4Lij4Lil4Liy4LiU4LiB4Lij4Liw4Lia4Lix4LiH!5e0!3m2!1sth!2sth!4v1633888598687!5m2!1sth!2sth" 
                        width="800" height="800" style={{border:"0"}} 
                        allowfullscreen="" loading="lazy" title="map"
                        class="responsive-iframe"
                        ></iframe> 
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <h1 className="c-title" style={{  color: darkMode && "white", transition: darkMode && "0.1s" }} >Contact me</h1>
                    </p>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <div className="col-2">
                                <input style={{backgroundColor: darkMode && "#333"}}  type="text" placeholder="Name" name="user_name" id="ft"  />
                                <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" id="ft"/> 
                            </div>
                            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" id="ft"/>
                            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" id="ft"/>
                            <button  class="slide_from_left" >Submit</button>
                            {done && "Thank you for your message!"}
                        </form>
                </div>
            </div>
            <Btntotop/>
        </div>
    )
}
