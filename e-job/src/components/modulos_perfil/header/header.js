import React  from 'react';
import './header.css';

function Header() {
  return (
    <div class="contenedor_header">
       <div class="elementos_header ">
           <h1 className='h1j'>E-job</h1>
       </div>
       <div class="elementos_header">
           <input type="text" placeholder="Buscar" class="buscador"/>
       </div>
       <div class="elementos_header">
           <a href="#"><i class="fas fa-cog ruedita" ></i></a>
       </div>
     </div>
  )
}

export default Header;