import { useEffect, useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Profile } from './components/Profile';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';



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
