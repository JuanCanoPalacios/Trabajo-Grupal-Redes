import React from 'react';
import'./style.css'; //importar hoja de estilos.

class Componente_registrado extends React.Component{ //clase que se transforma en componente.
    render()
    {
        return <div class = "div">
        <h1>!!Felicidades!!</h1>
        <h2>Te has registrado correctamente, ahora puedes navegar libremente por E-JOB.</h2>
        <input class = "button" type="submit" value="Navegar" onclick="window.location.href='/pagina_principal/index.html'" />
    </div>
    }
}

export default Componente_registrado;