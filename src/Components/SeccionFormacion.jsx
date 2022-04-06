import React from 'react';
import LineaNegra from '../assets/linea-negra.png'


const SeccionFormacion = () => {
  return (
       <>
             <div className="row">
                <div className="col-md-12 col-sm-12 contenedor-seccion-formacion">
                    <div className='seccion-formacion'>
                        <img src={LineaNegra} alt="linea-negra" />
                        <h2>FORMACIÓN ACADÉMICA</h2>
                          <div className='formacion'>
                             <h3>LICENCIATURA DE DISEÑO EN COMUNICACIÓN VISUAL</h3>
                             <h4>Universidad Nacional de la Plata.</h4>
                             <h5>Área: Diseño Gráfico</h5>
                         </div>
                         <div className='formacion'>
                             <h3>MODALIDAD EN COMUNICACIÓN, ARTE Y DISEÑO</h3>
                             <h4>Escuela de Educación Media N°8.</h4>
                             <h5>Nivel: Secundario</h5>
                         </div>
                    </div>
                </div>
            </div>
       </>
  )
};

export default SeccionFormacion;
