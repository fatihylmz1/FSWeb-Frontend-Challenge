import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const DataContext = createContext();


export const DataContextProvider = ({ children }) => {
    const data_tr =
    {
        frontend: "Ben bir Frontend<br /> Geliştiriciyim...",
        who: "...harika kullanıcı deneyimlerine sahip sağlam ve ölçeklenebilir frontend ürünleri oluşturmayı seven..",
        basicinfo: "Temel Bilgiler",
        dogum: "Doğum Tarihi",
        city: "Şehir",
        egitim: "Eğitim Durumu",
        rol: "Tercih Ettiği Rol",
        hakkimda: "Hakkımda",
        hakkimdacontent: "23 yaşında bir Elektrik Elektronik mühendisiyim.",
        project: "Projeler",
        projectname1: "Alışveriş Kartı",
        projectcontent1: "Bu sprint challenge'ında, bilgisayar başında karnı acıkan yazılımcılara yiyecek getirmek için tasarlanmış bir web sitesini tasarladım ve Teknolojik Yemekler' markasına, Anasayfa, Sipariş Formu ve Sipariş Alındı sayfası oluşturarak bu konulardaki ustalığımı gösterdim.",
        projectname2: "Rezil Filmler",
        projectcontent2: "Bu projede, küçük bir film veritabanı içeren bir web uygulamasında çalıştım, iki farklı reducer ile işlem yaptım. Hem mevcut tüm state ve action oluşturucuları kullandım, hem de sıfırdan reducer/redux pairing'leri oluşturdum.",
        message: "Bana Mesaj Gönder!",
        messagecontent: "Bir teklifin ya da sorun mu var, veya sadecebir merhaba mı demek istedin ? Hadi! ",


    };
    const data_en =
    {
        frontend: "I am a Frontend<br /> Developer...",
        who: "...who likes to craft solid and scalable frontend<br /> products with great user experiences.",
        basicinfo: "Basic Information",
        dogum: "Birth Date",
        city: "City",
        egitim: "Education",
        rol: "Preferred Role",
        hakkimda: "About Me",
        hakkimdacontent: "I am an Electric-Electronical Engineer who ages 23.",
        project: "Projects",
        projectname1: "Shopping Card",
        projectcontent1: "In this sprint challenge, I designed a web system designed to bring food to software developers who are hungry in front of the computer, and I showed my mastery by running the Home Page, Order Form and Order Receipt page for the Technological Food brand.",
        projectname2: "Crud Films",
        projectcontent2: "In this project, I worked on a web application containing a small movie database and processed it with two different reducers. I used all available state and action creators and created reducer/redux pairings from scratch.",
        message: "Send Me a Message!",
        messagecontent: "Got a question or proposal, or just want<br /> to say hello? Go ahead.",


    };




    const [lang, setLang] = useState(true);
    const [data, setData] = useState(data_tr);

    useEffect(() => {
        localStorage.setItem("lang", lang);
    }, []);



    const togglelang = () => {
        setLang(!lang);

    };

    useEffect(() => {
        if (lang === true) {
            setData(data_tr);
        }
        else if (lang === false) {
            setData(data_en);
        }
        console.log("lang >", lang);
    }, [lang]);


    const contexobject = {
        data,
        setData,
        togglelang,
    }



    return <DataContext.Provider value={contexobject}>
        {children}

    </DataContext.Provider>
}