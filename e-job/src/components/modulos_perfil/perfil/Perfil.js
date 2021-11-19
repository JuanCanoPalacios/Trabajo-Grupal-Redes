import React, { useContext, useEffect, useState }  from 'react';
import './perfil.css';
import Cara from './imagenes/perfil.png'

import Clip1 from './imagenes/clipa.png'
import Clip2 from './imagenes/clipb.jpg'
import Clip3 from './imagenes/clipc.png'

import Cara1 from './imagenes/caraa.jpg'
import Cara2 from './imagenes/carab.jpg'
import Cara3 from './imagenes/carac.jpg'
import Cara4 from './imagenes/carad.jpg'
import axios from 'axios';
import { StoreContext } from '../../../store/StoreProvider';


function Perfil( ) {


    const [store, dispatch] = useContext(StoreContext)

    const [user, setUser] = useState({

    })

    useEffect( async () => {
        await axios.get(`http://localhost:3001/users/profile/${store}`)
        .then(res => {
            const u = res.data.response[0]
            setUser(u[0])
        })
    }, [])
    
    console.log(user)
    return (
        <div className="contenedor_principal">
            <div className="contenedor_perfil">
                <div className="contenedor_imagen">
                    <img src={Cara} alt="cara" className="imagen_cara"/>
                </div>
                <div className="contenedor_informacion">
                    <div className="info">
                        <h3>Nombre: <span>{user.nombre_usuario}</span></h3>
                        <h3>Apellido: <span>{user.apellido_usuario}</span></h3>
                        <h3>Edad: <span>23</span> </h3>
                        <h3>Nacionalidad: <span>{user.pais}</span></h3>
                        {/* <h3>Equipo: <span>{user.empresa.nombre_empresa}</span></h3> */}
                        <h3>Descripcion: <span>{user.descripcion}</span></h3>
                    </div>
                    <div className="contenido">
                        <h2 className="alinear_texto">Mejores clips</h2>
                        <div className="contenedor_imagenes">
                            <img src={Clip1} alt="img" className="ajustar_imagen"/>
                            <img src={Clip2} alt="img" className="ajustar_imagen"/>
                            <img src={Clip3} alt="img" className="ajustar_imagen"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contenedor_comentarios">
                <div className="todos_comentarios">
                    <div className="comentario">
                        <div className="comentario__descripcion">
                            <img src={Cara1} alt="img" className="img_comentario"/>
                            <h4>Luca Pintado:</h4>
                        </div>
                        <div className="comentario__informacion">
                            <p>Exelente jugador es un capo la verdad </p>
                        </div>
                    </div>
                    <div className="comentario">
                        <div className="comentario__descripcion">
                         <img src={Cara2} alt="img" className="img_comentario"/>
                            <h4>Santiago Cichi:</h4>
                        </div>
                        <div className="comentario__informacion">
                            <p>Le gane un 1 vs 1 es malardo</p>
                        </div>
                    </div>
                    <div className="comentario">
                        <div className="comentario__descripcion">
                            <img src={Cara3} alt="img" className="img_comentario"/>
                            <h4>Maria Perez:</h4>
                        </div>
                        <div className="comentario__informacion">
                            <p>Se cae a pedazos es horrible</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Perfil;