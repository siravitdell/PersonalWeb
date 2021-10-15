import React from 'react'
import {BiArrowToTop} from "react-icons/bi";

export default function Btntotop() {
    return (
        <div className="btntop"> 
            <div className="wrapperr">
                <a href="#intro" className="a-btn">
                    <BiArrowToTop className="btn-icon" size="40px" color="white"/>
                </a>   
            </div>
        </div>
    )
}
