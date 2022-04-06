import React from 'react';
import SeccionSobreMI from '../Components/SeccionSobreMI';
import SeccionFormacion from '../Components/SeccionFormacion';
import SeccionFormulario from '../Components/SeccionFormulario';
import 'animate.css';
import SeccionCursos from '../Components/SeccionCursos';

const Home = () => {
  return (
      <>
        <SeccionSobreMI />
        <SeccionFormacion />
        <SeccionCursos />
        <SeccionFormulario />
      </>
  )
};

export default Home;
