import React from 'react';
import LineaNueva from '../assets/linea-nueva.png'
import LineaMedia from '../assets/linea-media.png'
import LineaSinTitulo from '../assets/linea-sin-titulo.png'
import LineaFinal from '../assets/linea-final.png'

const SeccionCursos = () => {
  return (
        <>
                           <div className="col-md-12 col-sm-12 contenedor-seccion-cursos">
                    <div className='seccion-cursos'>
                       
                        <h2>ESTUDIOS / CURSOS</h2>
                          <div className='formacion-cursos margenes-bottom-1'>
                             <img className='linea-rosa-1' src={LineaNueva} alt="linea-nueva" />
                             <h3>DISEÑO UX/UI - <span>CoderHouse</span></h3>
                             <h4>Research e investigación sobre problemas para convertirlos <br />
                                 en una idea de app o web. Diseño y creación de prototipos  <br />
                                 de apps o sitios webs mobile first.</h4>
                         </div>
                         <div className='formacion-cursos  margenes-bottom-2'>
                             <img className='linea-rosa-2' src={LineaMedia} alt="linea-nueva" />
                             <h3>DISEÑO UI - <span>EDteam</span></h3>
                             <h4>Técnicas y prácticas para la creación de doseños de interfaces funcionales.</h4>
                         </div>
                         <div className='formacion-cursos margenes-bottom-4'>
                             <img className='linea-rosa-3' src={LineaMedia} alt="linea-nueva" />
                             <h3>UX/UI Y PROTOTIPADO DIGITAL - <span>Udemy</span></h3>
                             <h4>Diseño de prototipos digitales con Figma</h4>
                         </div>
                         <div className='formacion-cursos margenes-bottom-2'>
                             <img className='linea-rosa-3' src={LineaSinTitulo} alt="linea-nueva" />
                             <h3>FIGMA Y DISEÑO DE INTERFACES -<span>EDteam</span></h3>
                         </div>
                         <div className='formacion-cursos margenes-bottom-2'>
                             <img className='linea-rosa-3' src={LineaSinTitulo} alt="linea-nueva" />
                             <h3>ADOBE XD DESDE CERO - <span>EDteam</span></h3>
                         </div>
                         <div className='formacion-cursos margenes-bottom-1'>
                         <img className='linea-rosa-3' src={LineaFinal} alt="linea-nueva" />
                             <h3>DISEÑO WEB CON FIGMA -  <span>Domestika</span></h3>
                             <h4>Creación de interfaces eficaces impartido por Pablo Stanley</h4>
                         </div>

                         <div className='formacion-cursos margenes-bottom-1'>
                             <h3 className='conocimiento-informatico'>CONOCIMIENTO INFORMÁTICO</h3>
                             <h4 className='herramientas-graficas'>Herramientas gráficas: </h4>
                             <h5>Illustrator, Photoshop, InDesign, After Effects, Adobe XD. <br />
                              Figma, Trello.</h5>
                         </div>
                    </div>
                </div>
        </>
  )
};

export default SeccionCursos;
