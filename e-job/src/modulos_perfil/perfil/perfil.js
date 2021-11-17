import React  from 'react';
import './perfil.css';
import Cara from './imagenes/perfil.png'

import Clip1 from './imagenes/clipa.png'
import Clip2 from './imagenes/clipb.jpg'
import Clip3 from './imagenes/clipc.png'

import Cara1 from './imagenes/caraa.jpg'
import Cara2 from './imagenes/carab.jpg'
import Cara3 from './imagenes/carac.jpg'
import Cara4 from './imagenes/carad.jpg'


function Perfil() {
  return (
        <div class="contenedor_main">
            <div class="contenedor_perfil">
                <div class="contenedor_imagen">
                    <img src={Cara} alt="cara" class="imagen_cara"/>
                </div>
                <div class="contenedor_informacion">
                    <div class="info">
                        <h3>Nombre: <span>Joaquin</span></h3>
                        <h3>Apellido: <span>Barreiro</span></h3>
                        <h3>Edad: <span>23</span> </h3>
                        <h3>Nacionalidad: <span>Argentina</span></h3>
                        <h3>Equipo: <span>Fnatic</span></h3>
                        <h3>Descripcion: <span>Jugador profesional con 10 años de expericia</span></h3>
                    </div>
                    <div class="contenido">
                        <h2 class="alinear_texto">Mejores clips</h2>
                        <div class="contenedor_imagenes">
                            <img src={Clip1} alt="img" class="ajustar_imagen"/>
                            <img src={Clip2} alt="img" class="ajustar_imagen"/>
                            <img src={Clip3} alt="img" class="ajustar_imagen"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contenedor_comentarios">
                <div class="todos_comentarios">
                    <div class="comentario">
                        <div class="comentario__descripcion">
                            <img src={Cara1} alt="img" class="img_comentario"/>
                            <h4>Luca Pintado:</h4>
                        </div>
                        <div class="comentario__informacion">
                            <p>Exelente jugador es un capo la verdad </p>
                        </div>
                    </div>
                    <div class="comentario">
                        <div class="comentario__descripcion">
                         <img src={Cara2} alt="img" class="img_comentario"/>
                            <h4>Santiago Cichi:</h4>
                        </div>
                        <div class="comentario__informacion">
                            <p>Le gane un 1 vs 1 es malardo</p>
                        </div>
                    </div>
                    <div class="comentario">
                        <div class="comentario__descripcion">
                            <img src={Cara3} alt="img" class="img_comentario"/>
                            <h4>Maria Perez:</h4>
                        </div>
                        <div class="comentario__informacion">
                            <p>Se cae a pedazos es horrible</p>
                        </div>
                    </div>
                    <div class="comentario">
                        <div class="comentario__descripcion">
                            <img src={Cara4} alt="img" class="img_comentario"/>
                            <h4>Jack Martinez:</h4>
                        </div>
                        <div class="comentario__informacion">
                            <p>Joaquin Barreiro is the best player i have ever seen in my life</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Perfil;