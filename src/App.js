import { useEffect, useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Profile } from './components/Profile';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Datatr } from './data-tr';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    setIsDarkMode(savedDarkMode === "true");
  }, []);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("darkMode", !isDarkMode);
  };
  // const [lang, setLang] = useState("tr");

  // useEffect(() => {
  //   const savedlang = localStorage.getItem("lang");
  //   setLang(savedlang === "en");
  // }, []);

  // const togglelang = () => {
  //   setLang(!lang);
  //   localStorage.setItem("lang", !lang);
  // };

  // useEffect(() => {
  //   const savedlang = localStorage.getItem("lang");
  //   // console.log(savedlang);
  // }, [lang]);



  return (
    <div>
      <Hero toggleMode={toggleMode} isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Profile isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />

    </div>
  );
}

export default App;
