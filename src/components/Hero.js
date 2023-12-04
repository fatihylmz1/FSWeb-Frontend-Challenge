import React, { useEffect, useState } from "react";
import "./Hero.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




export const Hero = () => {


    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        const savedDarkMode = localStorage.getItem("darkMode");
        setIsDarkMode(savedDarkMode === "true");
    }, []);

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem("darkMode", !isDarkMode);
    };


    return (
        <div>
            <div className="header-body">
                <div className="header-blue">
                    <div className="lang">Türkçeye Geç</div>
                    <h3 className="name">Mehmet Fatih Yılmaz</h3>

                    <div className="header-content">
                        <div className="header-cv">
                            <p className="frontend">I am a Frontend<br /> Developer...</p>
                            <p className="who">...who likes to craft solid and scalable frontend<br /> products with great user experiences.</p>

                            <div className="link">
                                <div>
                                    <FontAwesomeIcon icon="fa-brands fa-github" />
                                    <NavLink to="https://github.com/fatihylmz1" className="navlink">GitHub</NavLink>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                                    <NavLink to="https://www.linkedin.com/in/mehmet-fatih-y%C4%B1lmaz-a555111a5/" className="navlink">Linkedin</NavLink>
                                </div>
                            </div>
                        </div>

                        <div >
                            <img src="https://avatars.githubusercontent.com/u/145333340?v=4" className="header-img" />

                        </div>
                    </div>
                </div>
                <div className="header-green">
                    <div>
                        <button onClick={toggleMode}>Toggle Dark/Light Mode</button>
                    </div>
                </div>
            </div>
        </div>
    )
}