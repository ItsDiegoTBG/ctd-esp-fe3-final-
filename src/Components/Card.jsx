import React from "react";
//import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Card = ({ name, username, id }) => {

  const addFav = () => {
    // Recuperamos los favoritos existentes del localStorage (si hay)
    const favoritos = JSON.parse(localStorage.getItem('favs')) || [];
    
    // Verificamos si el dentista ya está en los favoritos para evitar duplicados
    const isAlreadyFav = favoritos.some((fav) => fav.id === id);
    
    if (!isAlreadyFav) {
      // Si no está en los favoritos, lo agregamos
      favoritos.push({ name, username, id });
      // Guardamos la lista actualizada de favoritos en localStorage
      localStorage.setItem('favs', JSON.stringify(favoritos));
      alert(`${name} ha sido agregado a tus favoritos.`);
    } else {
      alert(`${name} ya está en tus favoritos.`);
    }
  };

  return (
    <div className="card">
      <h3>
      <Link to={`/detail/${id}`}>{name}</Link>
    </h3>
    <img 
  src="/images/doctor.jpg"  
  alt="Cambiar Tema"
  style={{ cursor: 'pointer', width: '200px', height: '200px', marginLeft:'100px', marginRight:'100px'}} 
/>
    <p>Username: {username}</p>
    <button onClick={addFav}>Agregar a favoritos</button>
  </div>
  );
};

export default Card;
