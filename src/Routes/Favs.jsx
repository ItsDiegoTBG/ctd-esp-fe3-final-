import React, { useEffect, useState } from 'react';
import Card from "../Components/Card";
import Footer from '../Components/Footer'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favs, setFavs] = useState([]); // Estado para almacenar los dentistas favoritos

  useEffect(() => {
    // Cargar los dentistas desde el localStorage
    const storedFavs = JSON.parse(localStorage.getItem('favs')) || [];
    setFavs(storedFavs);
  }, []); // Este efecto solo se ejecuta una vez, cuando el componente se monta

  if (favs.length === 0) {
    return <p>No tienes dentistas favoritos aún.</p>; // Mensaje si no hay dentistas favoritos
  }
  return (
    <>
<div>
      <h1>Mis Dentistas Favoritos</h1>
      <div className="grid-wrapper"> 
<div className="card-grid">
        {favs.map((dentista) => (
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
    </>
  );

};

export default Favs;
