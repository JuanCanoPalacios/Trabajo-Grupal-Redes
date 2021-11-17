
import './main.css';
import React from 'react';
import Jugador from './jugadores/jugadores'
import csgo from "./images/csgo.png"
import mortal from "./images/mortal.png"
import nba from "./images/nba.png"
import valorant from "./images/valorant.png"

const Main = () => {
    return (
        <div class="imagen-principal">
            <div class="contenedor_main">
                <h2 class="alinear_texto semi_titulo">Jugadores</h2>
                <div class="contenedor_imagenes">
                    <Jugador persona="faker"/>
                    <Jugador persona="wolf"/>
                    <Jugador persona="joaquito"/>
                    <Jugador persona="tomi"/>
                </div>
                <h2 class="alinear_texto semi_titulo">Juegos</h2>
                <div class="contenedor_imagenes">
                    <div class="juegos">
                    <a href="#"><img src={valorant} alt="valorant" class="imagenes_juegos"/></a> 
                        <h3 class="alinear_texto titulo_juego">Valorant</h3>
                    </div>
                    <div class="juegos">
                        <a href="#"><img src={csgo} alt="valorant" class="imagenes_juegos"/></a>
                        <h3 class="alinear_texto titulo_juego">Counter Strike</h3>
                    </div>
                    <div class="juegos">
                        <a href="#"><img src={nba} alt="valorant" class="imagenes_juegos"/></a>
                        <h3 class="alinear_texto titulo_juego">Nba</h3>
                    </div>
                    <div class="juegos">
                        <a href="#"><img src={mortal} alt="valorant" class="imagenes_juegos"/></a>
                        <h3 class="alinear_texto titulo_juego">Mortal Kombat</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;