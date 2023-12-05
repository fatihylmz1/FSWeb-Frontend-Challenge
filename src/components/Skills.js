import React, { useContext } from "react";
import "./Skills.css";
import { DataContext } from "../context/DataProvider";


export const Skills = ({ isDarkMode }) => {

    const { data } = useContext(DataContext);
    return (
        <div className={!isDarkMode ? "skills" : "skills-dark"}>

            <div className={!isDarkMode ? "skills-content" : "skills-content-dark"}>
                <div className={!isDarkMode ? "header" : "header-dark"}><h1>{data.skills}</h1></div>



                <div className="column-1">
                    <div className="langs">

                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png" className="logo" />
                        <p className={!isDarkMode ? "program-name" : "program-name-dark"}>JavaSc</p>

                    </div>
                    <div className="langs">
                        <img src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png" className="logo" />
                        <p className={!isDarkMode ? "program-name" : "program-name-dark"}>REACT</p>
                    </div>
                    <div className="langs">
                        <img src="https://cdn-images-1.medium.com/max/1600/1*Vo5RDpNkOsfDn8sx06mthA.png" className="logo" />
                        <p className={!isDarkMode ? "program-name" : "program-name-dark"}>REDUX</p>
                    </div>
                </div>



                <div className="column-2">
                    <div className="langs">
                        <img src="https://www.loginradius.com/blog/static/6ee159acf6c294342ec04f86aede5d14/701ee/coverImage.jpg" className="logo" />
                        <p className={!isDarkMode ? "program-name" : "program-name-dark"}>NODE</p>
                    </div>
                    <div className="langs">
                        <img src="https://pbs.twimg.com/profile_images/1545098208556097536/rKXaODLl_400x400.jpg" className="logo" />
                        <p className={!isDarkMode ? "program-name" : "program-name-dark"}>VSCd.</p>
                    </div>
                    <div className="langs">
                        <img src="https://s3-alpha.figma.com/hub/file/697598809/ce5e0bb3-16b9-4d88-9bca-7d237fe725a8-cover.png" className="logo" />
                        <p className={!isDarkMode ? "program-name" : "program-name-dark"}>FIGMA</p>
                    </div>
                </div>
            </div>

        </div>
    )
}