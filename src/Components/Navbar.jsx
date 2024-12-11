import React from 'react'
import {Link} from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = ({ toggleTheme }) => {

  return (
    <nav  className="navbar">
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <h1><Link to="/home">DH Odonto</Link></h1>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
        <li><Link to="/favs">Favoritos</Link></li>
        <button onClick={toggleTheme}>Cambiar Tema</button>
      </ul>

    


      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

      
    </nav>
  )
}

export default Navbar