import React, { useContext, useEffect, useState } from "react";
import "./Hero.css";
import { NavLink } from "react-router-dom";
import github from "./Icons/github.svg";
import linkedin from "./Icons/linkedin.svg";
import { DataContext } from "../context/DataProvider";




export const Hero = ({ toggleMode, isDarkMode, }) => {


    const { data } = useContext(DataContext);
    const { togglelang } = useContext(DataContext);



    return (
        <div>
            <div className="header-body">
                <div className={!isDarkMode ? "header-blue" : "header-blue-dark"}>
                    <div className="lang">
                        <button onClick={togglelang}>
                            Türkçeye Geç

                        </button></div>
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

                        <div >
                            <img src="https://avatars.githubusercontent.com/u/145333340?v=4" className="header-img" />

                        </div>
                    </div>
                </div>
                <div className={!isDarkMode ? "header-green" : "header-green-dark"}>
                    <div>
                        <button onClick={toggleMode}>Toggle Dark/Light Mode</button>
                    </div>
                </div>
            </div>
        </div>
    )
}