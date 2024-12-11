import React, { useState } from 'react';


const Form = ({ onSubmit, setErrorMessage }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};

    // Validación del nombre
    if (!name) errors.name = 'El nombre es requerido.';
    else if (name.length <= 5) errors.name = 'El nombre debe tener más de 5 caracteres.';
    
    // Validación del email
    if (!email) errors.email = 'El email es requerido.';
    else if (!/\S+@\S+\.\S+/.test(email)) errors.email = 'El email no es válido.';
    
    // Validación del mensaje
    if (!message) errors.message = 'El mensaje no puede estar vacío.';

    return errors;
  };

  // Manejo del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validamos los datos
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Si no hay errores, llamamos a onSubmit pasando el nombre
      onSubmit(name);
      // Limpiamos el formulario
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
      setErrorMessage(''); // Limpiar mensaje de error
    } else {
      setErrors(validationErrors); // Mostramos los errores si los hay
      setErrorMessage('Por favor verifique su información nuevamente');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      
      <div>
        <label>Mensaje</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {errors.message && <p>{errors.message}</p>}
      </div>
      
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
