

import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Contact from "./Routes/Contact";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Navbar from './Components/Navbar';

function App() {
  const savedTheme = localStorage.getItem('theme') || 'light'; 
  const [theme, setTheme] = useState(savedTheme);

  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); 
  };

 
  useEffect(() => {
    document.body.className = theme; 
  }, [theme]);
  return (

    <Router>
      <div>
      <Navbar toggleTheme={toggleTheme} />
       <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favs" element={<Favs />} />
      </Routes>
      </div>
       
    </Router>



  );
}

export default App;
