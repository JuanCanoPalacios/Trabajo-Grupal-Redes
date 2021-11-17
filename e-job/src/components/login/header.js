import React from 'react';
import'./styles_login.css'; //importar hoja de estilos.

class Header extends React.Component{ //clase que se transforma en componente.
    render()
    {
        return <header>
                 <center>
                    <h1 class="h1">
                        E-JOB
                    </h1>
                 </center>
               </header>
    }
}

export default Header;
