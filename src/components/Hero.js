import React, { useContext, useEffect, useState } from "react";
import "./Hero.css";
import { NavLink } from "react-router-dom";
import github from "./Icons/github.svg";
import linkedin from "./Icons/linkedin.svg";
import { DataContext } from "../context/DataProvider";




export const Hero = () => {


    const { data } = useContext(DataContext);
    const { togglelang } = useContext(DataContext);
    const { toggleMode } = useContext(DataContext);
    const { isDarkMode } = useContext(DataContext);




    return (
        <div className="hero">
            <div className="header-body">
                <div className={!isDarkMode ? "header-blue" : "header-blue-dark"}>
                    <div className="lang">
                        <p className="extra-lang"><button onClick={togglelang} className="btn-lang">Türkçe</button>'ye Geç</p>

                        <p className="extra-toggle"><button onClick={toggleMode} className="btn-toggle" />Dark/Light</p>
                    </div>
                    <h3 className="name">Mehmet Fatih Yılmaz</h3>

                    <div className="header-content">
                        <div className="header-cv">
                            <p className="frontend">{data.frontend}</p>
                            <p className="who">{data.who}</p>

                            <div className="link">
                                <div className={!isDarkMode ? "navlink" : "navlink-dark"}>
                                    <img src={github} />
                                    <NavLink to="https://github.com/fatihylmz1" >GitHub</NavLink>
                                </div>
                                <div className={!isDarkMode ? "navlink" : "navlink-dark"}>
                                    <img src={linkedin} />
                                    <NavLink to="https://www.linkedin.com/in/mehmet-fatih-y%C4%B1lmaz-a555111a5/" >Linkedin</NavLink>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img src="https://avatars.githubusercontent.com/u/145333340?v=4" className="header-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}