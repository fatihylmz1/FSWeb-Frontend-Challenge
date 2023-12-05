import "./Footer.css";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import twitter from "./Icons/Twitter.svg";
import codepen from "./Icons/CodePen.svg";
import atsign from "./Icons/at-sign.svg";
import instagram from "./Icons/Instagram.svg";
import { DataContext } from "../context/DataProvider";

export const Footer = ({ isDarkMode }) => {

    const { data } = useContext(DataContext);
    return (
        <div >

            <div className={!isDarkMode ? "footer" : "footer-dark"}>
                <div><h1 className="footer-head">{data.message}</h1></div>
                <div><p className={!isDarkMode ? "message" : "message-dark"}>{data.messagecontent}</p></div>
                <div><NavLink to="#" className="nav-link">fatihylmz27@icloud.com</NavLink></div>
                <div className="icons">
                    <img src={twitter} />
                    <img src={codepen} />
                    <img src={atsign} />
                    <img src={instagram} />
                </div>
            </div>
        </div>
    )
}