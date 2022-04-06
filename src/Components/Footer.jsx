import React from 'react';
import LogoFooter from '../assets/logo-va-footer.png'
import LogoWhatsapp from '../assets/logo-whatsapp.png'
import LogoEmail from '../assets/logo-email.png'
import LogoLinkedin from '../assets/logo-linkedin.png'
import LogoUbicacion from '../assets/logo-ubicacion.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
      <>
        <div className="row footer-mobile">
            <div className="col-md-4 col-sm-4 contenedor-logo-footer">
                <div className='logo-footer'>
                   <Link to="/"><img src={LogoFooter} alt="logo-footer" /></Link> 
                </div>
            </div>

            <div className="col-md-8 col-sm-8 contenedor-logos-redes-sociales">
                <div className='logos-redes-sociales-fila-1'>
                    <div className="logos-footer">
                       <a href="https://api.whatsapp.com/send?phone=+542214404997" target="_blank"><img src={LogoWhatsapp} alt="logo-whatsapp" /><p className='logo-whatsapp'>+54 221 440 4997</p></a>  
                    </div>
                    <div className="logos-footer">
                        <a className='logo-linkedin' href="https://www.linkedin.com/in/arizteguivictoria/" target="_blank"><img src={LogoLinkedin} alt="logo-linkedin" /> <p>/arizteguivictoria</p></a> 
                    </div>
                </div>
                <div className='logos-redes-sociales-fila-2'>
                <div className="logos-footer">
                        <a className='logo-email' href="mailto:arizteguivictoria@gmail.com?subject=" target="_blank"> <img src={LogoEmail} alt="logo-email" /> <p>arizteguivictoria@gmail.com</p></a>
                    </div>
                    <div className="logos-footer">
                        <a className='logo-ubicacion' href="https://www.google.com/maps/place/Tandil,+Provincia+de+Buenos+Aires/@-37.3195022,-59.2127421,12z/data=!3m1!4b1!4m5!3m4!1s0x95911f9b2733946f:0xceef2c76899c202d!8m2!3d-37.3287999!4d-59.1367167" target="_blank"><img src={LogoUbicacion} alt="logo-ubicacion" />  <p>Tandil, Buenos Aires, Argentina</p></a> 
                    </div>
                </div>
            </div>
        </div>
      </>
  )
};

export default Footer;
