import React, { useContext } from "react";
import "./Skills.css";
import { DataContext } from "../context/DataProvider";


export const Skills = () => {

    const { data } = useContext(DataContext);

    const { isDarkMode } = useContext(DataContext);
    return (
        <div className={isDarkMode === "light" ? "skills" : "skills-dark"}>

            <div className={isDarkMode === "light" ? "skills-content" : "skills-content-dark"}>
                <div className={isDarkMode === "light" ? "header" : "header-dark"}><h1>{data.skills}</h1></div>



                <div className="skills-logo">
                    <div className="langs">

                        <img src={data.javaurl} className="logo" />
                        <p className={isDarkMode === "light" ? "program-name" : "program-name-dark"}>{data.langjava}</p>

                    </div>
                    <div className="langs">
                        <img src={data.reacturl} className="logo" />
                        <p className={isDarkMode === "light" ? "program-name" : "program-name-dark"}>{data.langreact}</p>
                    </div>
                    <div className="langs">
                        <img src={data.reduxurl} className="logo" />
                        <p className={isDarkMode === "light" ? "program-name" : "program-name-dark"}>{data.langredux}</p>
                    </div>

                    <div className="langs">
                        <img src={data.nodeurl} className="logo" />
                        <p className={isDarkMode === "light" ? "program-name" : "program-name-dark"}>{data.langnode}</p>
                    </div>
                    <div className="langs">
                        <img src={data.vscdurl} className="logo" />
                        <p className={isDarkMode === "light" ? "program-name" : "program-name-dark"}>{data.langvscd}</p>
                    </div>
                    <div className="langs">
                        <img src={data.figmaurl} className="logo" />
                        <p className={isDarkMode === "light" ? "program-name" : "program-name-dark"}>{data.langfigma}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}