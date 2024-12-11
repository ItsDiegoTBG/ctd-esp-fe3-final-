import React, { useState } from 'react';
import Form from '../Components/Form'

import Footer from '../Components/Footer'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = (name) => {
    setSuccessMessage(`Gracias ${name}, te contactaremos cuando antes vía mail.`);
    setErrorMessage(''); // Limpiar cualquier mensaje de error previo
  };

  return (
    <div className="contact-container"> 
      <div className="content">
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
        {successMessage && <p>{successMessage}</p>}
        {errorMessage && <p>{errorMessage}</p>}
        <Form onSubmit={handleFormSubmit} setErrorMessage={setErrorMessage} />
      </div>
      <Footer />
    </div>
  );
};

export default Contact