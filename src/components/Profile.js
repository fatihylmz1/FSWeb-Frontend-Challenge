import React from "react";
import "./Profile.css";

export const Profile = ({ isDarkMode }) => {
    return (
        <div className="profile">
            <h1 className="head">PROFILE</h1>
            <div className="profile-content">
                <div>
                    <h2>Basic Information</h2>
                    <p>Doğum Tarihi 28.07.2000</p>
                    <p>İkamet Şehri Gaziantep</p>
                    <p>Eğitim<br /> Durumu</p><p> Gaziantep Üniversitesi<br />Elektrik-Elektronik MÜhendisliği<br />Lisans, 2023</p>
                    <p>Tercih Ettiği<br /> Rol</p><p> Full-Stack Developer</p>
                </div>

                <div>
                    <img src="https://avatars.githubusercontent.com/u/145333340?v=4" className="profile-img" />
                </div>

                <div>
                    <h2>About Me</h2>
                    <p>Lorem ipsum, dolor sit amet<br /> consectetur adipisicing elit.<br /> Veniam aut, odit laborum aliquam<br /> voluptatum nisi mollitia.</p>
                    <p> Mnima accusamus ratione soluta<br /> aperiam sit voluptate? Dicta quod<br /> deserunt quam temporibus<br /> cumque magnam!</p>
                </div>
            </div>
        </div>
    )
}