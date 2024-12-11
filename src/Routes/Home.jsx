import React from 'react'
import Card from '../Components/Card'

import Footer from '../Components/Footer'
import { useEffect, useState } from 'react';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
//SON 10 CARDS

const Home = () => {

  const [dentistas, setDentistas] = useState([]);

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users') 
      .then((response) => response.json())
      .then((data) => setDentistas(data));
  }, []);


  return (
    <div>
            
      <h1>Home</h1>
      <div className="grid-wrapper"> 
      <div className='card-grid'> 
        {/* Aqui deberias renderizar las cards */}      
         {dentistas.map((dentista) => (
          <Card
            key={dentista.id}
            name={dentista.name}
            username={dentista.username}
            id={dentista.id}
          />
        ))}
      </div>
    </div>
      
    <Footer></Footer>
    </div>
   

  
  )
}

export default Home