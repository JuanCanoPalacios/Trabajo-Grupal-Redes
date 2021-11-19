
import './header.css';
import cara from './images/perfil.png'
import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div class="contenedor_header">
            <div class="elementos_header">
                <h1 className='h1j'>E-job</h1>
            </div>
            <div class="elementos_header">
                <input type="text" placeholder="Buscar" class="buscador" />
            </div>
            <div class="elementos_header">
                <a href="/perfil/index_perfil.html"><img class="imagen_header" src={cara} alt="cara" /></a>
                <Link class = "perfil" type="submit" to="/perfil" >Perfil</Link>
                <a href="#"><i class="fas fa-cog ruedita" ></i></a>
            </div>
        </div>
    )
}

export default Header;