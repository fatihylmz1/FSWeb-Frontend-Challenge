import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const DataContext = createContext();


export const DataContextProvider = ({ children }) => {
    const data_tr =
    {
        frontend: "Ben bir Frontend Geliştiriciyim...",
        who: "...harika kullanıcı deneyimlerine sahip sağlam ve ölçeklenebilir frontend ürünleri oluşturmayı seven..",
        basicinfo: "Temel Bilgiler",
        dogum: "Doğum Tarihi",
        city: "Şehir",
        egitim: "Eğitim Durumu",
        rol: "Tercih Ettiği Rol",
        hakkimda: "Hakkımda",
        hakkimdacontent: "23 yaşında bir Elektrik Elektronik mühendisiyim.Şu anda Full-Stack Geliştirici olmak için çalışıyorum.",
        project: "Projeler",
        projectname1: "Alışveriş Kartı",
        projectcontent1: "Bu sprint challenge'ında, bilgisayar başında karnı acıkan yazılımcılara yiyecek getirmek için tasarlanmış bir web sitesini tasarladım ve Teknolojik Yemekler' markasına, Anasayfa, Sipariş Formu ve Sipariş Alındı sayfası oluşturarak bu konulardaki ustalığımı gösterdim.",
        projectname2: "Rezil Filmler",
        projectcontent2: "Bu projede, küçük bir film veritabanı içeren bir web uygulamasında çalıştım, iki farklı reducer ile işlem yaptım. Hem mevcut tüm state ve action oluşturucuları kullandım, hem de sıfırdan reducer/redux pairing'leri oluşturdum.",
        message: "Bana Mesaj Gönder!",
        messagecontent: "Bir teklifin ya da sorun mu var, veya sadecebir merhaba mı demek istedin ? Hadi! ",
        skills: "Özellikler",
        profile: "Profil",
        langjava: "JavaSc",
        javaurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png",
        langreact: "REACT",
        reacturl: "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png",
        langredux: "REDUX",
        reduxurl: "https://cdn-images-1.medium.com/max/1600/1*Vo5RDpNkOsfDn8sx06mthA.png",
        langnode: "NODE",
        nodeurl: "https://www.loginradius.com/blog/static/6ee159acf6c294342ec04f86aede5d14/701ee/coverImage.jpg",
        langvscd: "VSCd.",
        vscdurl: "https://pbs.twimg.com/profile_images/1545098208556097536/rKXaODLl_400x400.jpg",
        langfigma: "FIGMA",
        figmaurl: "https://s3-alpha.figma.com/hub/file/697598809/ce5e0bb3-16b9-4d88-9bca-7d237fe725a8-cover.png",



    };
    const data_en =
    {
        frontend: "I am a Frontend Developer...",
        who: "...who likes to craft solid and scalable frontend products with great user experiences.",
        basicinfo: "Basic Information",
        dogum: "Birth Date",
        city: "City",
        egitim: "Education",
        rol: "Preferred Role",
        hakkimda: "About Me",
        hakkimdacontent: "I am an Electric-Electronical Engineer who ages 23.Now, I am working to become a Full-Stack developer.",
        project: "Projects",
        projectname1: "Shopping Card",
        projectcontent1: "In this sprint challenge, I designed a web system designed to bring food to software developers who are hungry in front of the computer, and I showed my mastery by running the Home Page, Order Form and Order Receipt page for the Technological Food brand.",
        projectname2: "Crud Films",
        projectcontent2: "In this project, I worked on a web application containing a small movie database and processed it with two different reducers. I used all available state and action creators and created reducer/redux pairings from scratch.",
        message: "Send Me a Message!",
        messagecontent: "Got a question or proposal, or just want to say hello? Go ahead.",
        skills: "Skills",
        profile: "Profile",
        langjava: "JavaSc",
        javaurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png",
        langreact: "REACT",
        reacturl: "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png",
        langredux: "REDUX",
        reduxurl: "https://cdn-images-1.medium.com/max/1600/1*Vo5RDpNkOsfDn8sx06mthA.png",
        langnode: "NODE",
        nodeurl: "https://www.loginradius.com/blog/static/6ee159acf6c294342ec04f86aede5d14/701ee/coverImage.jpg",
        langvscd: "VSCd.",
        vscdurl: "https://pbs.twimg.com/profile_images/1545098208556097536/rKXaODLl_400x400.jpg",
        langfigma: "FIGMA",
        figmaurl: "https://s3-alpha.figma.com/hub/file/697598809/ce5e0bb3-16b9-4d88-9bca-7d237fe725a8-cover.png",


    };

    const initialLang = navigator.language;
    const temaSorgu = window.matchMedia("(prefers-color-scheme: dark)");
    const tema = temaSorgu.matches ? "dark" : "light";
    console.log(tema);


    const [lang, setLang] = useState(localStorage.getItem("lang") || initialLang);
    const [data, setData] = useState(data_tr);
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme") || tema);



    useEffect(() => {
        const firstLang = localStorage.getItem("lang");
        const initial = firstLang ? firstLang : lang;
        localStorage.setItem('lang', initial);
        const firstTheme = localStorage.getItem("theme");
        const initialTheme = firstTheme ? firstTheme : isDarkMode;
        localStorage.setItem("theme", initialTheme);

    }, []);

    const Togglelang = () => {

        const currentLang = localStorage.getItem("lang")

        const newLang = currentLang === "tr-TR" ? "en-EN" : "tr-TR";

        localStorage.setItem("lang", newLang);
        setLang(newLang);

    };

    useEffect(() => {


        if (lang === "tr-TR") {
            setData(data_tr);
        }
        else if (lang === "en-EN") {
            setData(data_en);
        }
        console.log(lang);

    }, [lang]);


    const toggleMode = () => {
        const currentTheme = localStorage.getItem("theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        localStorage.setItem("theme", newTheme);
        setIsDarkMode(newTheme);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        console.log("saved", savedTheme);
        setIsDarkMode(savedTheme ? savedTheme : tema);

    }, [isDarkMode]);



    const contexobject = {
        data,
        setData,
        Togglelang,
        toggleMode,
        isDarkMode,
        lang,
    }



    return <DataContext.Provider value={contexobject}>
        {children}

    </DataContext.Provider>
}