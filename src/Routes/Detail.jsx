
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Components/Footer'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams();
  const [dentista, setDentista] = useState(null);
  console.log(id);
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    // Aquí puedes hacer una llamada a la API para obtener el dentista por id
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)  // Reemplaza con la URL de tu API
      .then((response) => response.json())
      .then((data) => setDentista(data));
  }, [id]);

  if (!dentista) {
    return <p>Cargando detalles del dentista...</p>;
  }

  return (
    <>
    <div className="detail-container"> {/* Contenedor principal */}
    <div className="detail-content">
      <table>
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Username</th>
      <th>Email</th>
      <th>Numero</th>
      <th>Página Web</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{dentista.name}</td>
      <td>{dentista.username}</td>
      <td>{dentista.email}</td>
      <td>{dentista.phone}</td>
      <td>{dentista.website}</td>
    </tr>
  </tbody>
</table>
    </div>
    <Footer />
  </div>
      {/* Aquí puedes agregar más detalles del dentista si lo deseas */}
   
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail