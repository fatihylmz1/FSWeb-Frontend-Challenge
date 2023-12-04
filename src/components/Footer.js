import "./Footer.css";
import React from "react";
import { NavLink } from "react-router-dom";
import twitter from "./Icons/Twitter.svg";
import codepen from "./Icons/CodePen.svg";
import atsign from "./Icons/at-sign.svg";
import instagram from "./Icons/Instagram.svg";

export const Footer = () => {
    return (
        <div >

            <div className="footer">
                <div><h1>Send me a message!</h1></div>
                <div><p>Got a question or proposal, or just want<br /> to say hello? Go ahead.</p></div>
                <div><NavLink to="#">fatihylmz27@icloud.com</NavLink></div>
                <div>
                    <img src={twitter} />
                    <img src={codepen} />
                    <img src={atsign} />
                    <img src={instagram} />
                </div>
            </div>
        </div>
    )
}