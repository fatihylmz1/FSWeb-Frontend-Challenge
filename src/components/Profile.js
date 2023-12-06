import React, { useContext } from "react";
import "./Profile.css";
import { DataContext } from "../context/DataProvider";

export const Profile = () => {

    const { data } = useContext(DataContext);

    const { isDarkMode } = useContext(DataContext);
    return (
        <div className={!isDarkMode ? "profile" : "profile-dark"}>
            <h1 className="head">{data.profile}</h1>
            <div className="profile-content">
                <div>
                    <h2 className="white">{data.basicinfo}</h2>
                    <div className="info-content">

                        <p className="green">{data.dogum}</p><p className="white"> 28.07.2000</p>
                    </div>
                    <div className="info-content">
                        <p className="green">{data.city}</p><p className="white"> Gaziantep</p>
                    </div>
                    <div className="info-content">
                        <p className="green">{data.egitim}</p><p className="white"> Gaziantep Üniversitesi<br />Elektrik-Elektronik MÜhendisliği<br />Lisans, 2023</p>
                    </div>
                    <div className="info-content">
                        <p className="green">{data.rol}</p><p className="white"> Full-Stack Developer</p>
                    </div>


                </div>

                <div>
                    <img src="https://avatars.githubusercontent.com/u/145333340?v=4" className="profile-img" />
                </div>

                <div>
                    <h2 className="white">{data.hakkimda}</h2>
                    <p className="white">{data.hakkimdacontent}</p>
                </div>
            </div>
        </div>
    )
}