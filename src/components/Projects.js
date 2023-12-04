import React from "react";
import "./Projects.css";
import shopping from "./ProjectPhoto/shoppingcard.png";
import crud from "./ProjectPhoto/crudfilmler.png";
import { NavLink } from "react-router-dom";

export const Projects = () => {
    return (
        <div className="projects">
            <div><h1>Projects</h1></div>

            <div className="card">
                <div>
                    <img src={shopping} className="shopping" />
                </div>

                <div>
                    <h2>Shopping Card</h2>
                    <p>Bu sprint challenge'ında, bilgisayar başında karnı acıkan yazılımcılara yiyecek getirmek için tasarlanmış bir web sitesi Teknolojik Yemekler' markasına, Anasayfa, Sipariş Formu ve Sipariş Alındı sayfası oluşturarak bu konulardaki ustalığınızı göstereceksin.</p>

                    <div className="lang">
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
            <div className="card">
                <div>
                    <img src={crud} className="shopping" />
                </div>

                <div>
                    <h2>Crud Filmler</h2>
                    <p>Bu projede, küçük bir film veritabanı içeren bir web uygulamasında çalışacak, iki farklı reducer ile işlem yapacaksınız. Hem mevcut tüm state ve action oluşturucuları kullanacak, hem de sıfırdan reducer/redux pairing'leri oluşturacaksınız.</p>

                    <div className="lang">
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