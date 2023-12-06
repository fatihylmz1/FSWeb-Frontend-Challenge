import React, { useContext } from "react";
import "./Projects.css";
import shopping from "./ProjectPhoto/shoppingcard.png";
import crud from "./ProjectPhoto/crudfilmler.png";
import { NavLink } from "react-router-dom";
import { DataContext } from "../context/DataProvider";

export const Projects = () => {

    const { data } = useContext(DataContext);

    const { isDarkMode } = useContext(DataContext);
    return (
        <div className={!isDarkMode ? "projects" : "projects-dark"}>
            <div><h1 className={!isDarkMode ? "project-head" : "project-head-dark"}>{data.project}</h1></div>

            <div className={!isDarkMode ? "card" : "card-dark"}>
                <div>
                    <img src={shopping} className="shopping" />
                </div>

                <div className="content">
                    <h2 className="project-name">{data.projectname1}</h2>
                    <p className={!isDarkMode ? "project-content" : "project-content-dark"}>{data.projectcontent1}</p>

                    <div className="lang-project">
                        <p className="object-name">Vercel</p>
                        <p className="object-name">Redux</p>
                        <p className="object-name">React</p>
                    </div>

                    <div className="links">
                        <NavLink to="https://fsweb-s11g1-shopping-cart-ten.vercel.app/" className="links">View Site</NavLink>
                        <NavLink to="https://github.com/fatihylmz1/fsweb-s11g1-shopping-cart">GitHub</NavLink>

                    </div>
                </div>
            </div>
            <div className={!isDarkMode ? "card" : "card-dark"}>
                <div>
                    <img src={crud} className="shopping" />
                </div>

                <div className="content">
                    <h2 className="project-name">{data.projectname2}</h2>
                    <p className={!isDarkMode ? "project-content" : "project-content-dark"}>{data.projectcontent2}</p>

                    <div className="lang-project">
                        <p className="object-name">Vercel</p>
                        <p className="object-name">Redux</p>
                        <p className="object-name">React</p>
                    </div>

                    <div className="links">
                        <NavLink to="https://fsweb-s11g3-crud-filmler-vert.vercel.app/movies" className="links">View Site</NavLink>
                        <NavLink to="https://github.com/fatihylmz1/fsweb-s11g3-crud-filmler">GitHub</NavLink>

                    </div>
                </div>
            </div>



        </div>
    )
}