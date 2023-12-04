import React, { useEffect, useState } from "react";
import "./Hero.css";
import { NavLink } from "react-router-dom";
import github from "./Icons/github.svg";
import linkedin from "./Icons/linkedin.svg";




export const Hero = ({ toggleMode, isDarkMode }) => {


    // const [isDarkMode, setIsDarkMode] = useState(false);
    // useEffect(() => {
    //     const savedDarkMode = localStorage.getItem("darkMode");
    //     setIsDarkMode(savedDarkMode === "true");
    // }, []);

    // const toggleMode = () => {
    //     setIsDarkMode(!isDarkMode);
    //     localStorage.setItem("darkMode", !isDarkMode);
    // };

    useEffect(() => {
        const dark = localStorage.getItem("darkMode");
        console.log(dark);
    }, [isDarkMode]);





    return (
        <div>
            <div className="header-body">
                <div className={!isDarkMode ? "header-blue" : "header-blue-dark"}>
                    <div className="lang">Türkçeye Geç</div>
                    <h3 className="name">Mehmet Fatih Yılmaz</h3>

                    <div className="header-content">
                        <div className="header-cv">
                            <p className="frontend">I am a Frontend<br /> Developer...</p>
                            <p className="who">...who likes to craft solid and scalable frontend<br /> products with great user experiences.</p>

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