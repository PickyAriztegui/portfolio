import React from 'react';
import LogoVa from '../assets/logo-VA.png'
import 'animate.css';
import { Link } from 'react-router-dom'
import HeaderMobile from './HeaderMobile';

const Header = () => {
  return( 
     <>
            <HeaderMobile />
            
            <div className="row header-desktop">
               <div className="col-md-2 col-sm-2 contenedor-header-left">
                    <div className='contenedor-logo'>
                    <Link to="/"><img src={LogoVa} alt="logo-va" /></Link>  
                    </div>
               </div>

               <div className="col-md-10 col-sm-10 contenedor-header-right">
                   <div className='contenedor-menu'>
                        <div className='menu-nav'>
                            <Link className='ancla-menu' to="/sobremi">SOBRE MÍ</Link> 
                        </div>
                        <div className='menu-nav'>
                            <Link className='ancla-menu' to="/portfolio">PORTFOLIO</Link>  
                        </div>
                        <div className='menu-nav'>
                            <Link className='ancla-menu' to="formacion">FORMACION</Link> 
                        </div>
                        <div className='menu-nav'>
                            <Link className='ancla-menu' to="cursos">ESTUDIOS / CURSOS </Link> 
                        </div>
                        <div className='menu-nav'>
                            <Link className='ancla-menu' to="contacto">CONTACTO</Link>
                        </div>
                   </div>
               </div>

            </div>
     </>
  )
};

export default Header;
