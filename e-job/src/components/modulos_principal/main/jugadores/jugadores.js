import React from 'react';
import foto from './images/faker.jpg'


const Jugador = (props) => {
    console.log(props)
    return (
        <div class="jugador">
             <h4>Wolf</h4>
             <a href="#"><img src={foto} alt="img" class="imagenes_jugadores"/></a> 
             <p>{props.persona}</p>
         </div>
    )
}

export default Jugador;