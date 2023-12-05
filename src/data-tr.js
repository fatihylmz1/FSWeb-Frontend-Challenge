// import axios from "axios"
// import { useContext, useEffect } from "react";
// import { DataContext } from "./context/DataProvider";

// export const Datatr = () => {
//     const data_tr =
//     {
//         frontend: "Ben bir Frontend<br /> Geliştiriciyim...",
//         who: "...harika kullanıcı deneyimlerine sahip sağlam ve ölçeklenebilir frontend ürünleri oluşturmayı seven..",
//         basicinfo: "Temel Bilgiler",
//         dogum: "Doğum Tarihi",
//         city: "Şehir",
//         egitim: "Eğitim Durumu",
//         rol: "Tercih Ettiği Rol",
//         hakkimda: "Hakkımda",
//         hakkimdacontent: "23 yaşında bir Elektrik Elektronik mühendisiyim.",
//         project: "Projeler",
//         projectname1: "Alışveriş Kartı",
//         projectcontent1: "Bu sprint challenge'ında, bilgisayar başında karnı acıkan yazılımcılara yiyecek getirmek için tasarlanmış bir web sitesini tasarladım ve Teknolojik Yemekler' markasına, Anasayfa, Sipariş Formu ve Sipariş Alındı sayfası oluşturarak bu konulardaki ustalığımı gösterdim.",
//         projectname2: "Rezil Filmler",
//         projectcontent2: "Bu projede, küçük bir film veritabanı içeren bir web uygulamasında çalıştım, iki farklı reducer ile işlem yaptım. Hem mevcut tüm state ve action oluşturucuları kullandım, hem de sıfırdan reducer/redux pairing'leri oluşturdum.",
//         message: "Bana Mesaj Gönder!",
//         messagecontent: "Bir teklifin ya da sorun mu var, veya sadecebir merhaba mı demek istedin ? Hadi! ",


//     }

//     const { setLang } = useContext(DataContext);
//     useEffect(() => {

//         axios.post("https://reqres.in/api/workintech", data_tr)
//             .then((res) => {
//                 setLang(res.data);
//                 // console.log(res.data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }, []);


//     return;
// }









