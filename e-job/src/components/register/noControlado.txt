import { useRef } from 'react';
import'./style.css'; //importar hoja de estilos.

const Componente_register = () => {

  const formulario = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    const datos = new FormData(formulario.current)

    // console.log(...datos.entries())

    const objetoDatos = Object.fromEntries([...datos.entries()])

    console.log(objetoDatos)
  }


  return (
    <div className = "div">
        <h1 className = "h1">Formulario de registro</h1> 
        <form className = "form" ref={formulario} onSubmit={handleSubmit} >
          <label className = "label" for="nombre">Nombre</label>
          <br />
          <input className = "input" name="nombre_usuario" type="text" required />
          <br />
          <br />
          <label className = "label" for="apelido">Apellido</label>
          <br />
          <input className = "input" name="apellido_usuario" type="text" required /> 
          <br />
          <br />
          <label className = "label" for="correo">Correo electronico</label>
          <br />
          <input className = "input" name="email" type="email" required />
          <br />
          <br />
          <label className = "label" for="nacimiento">Fecha de nacimiento</label>
          <br />
          <input className = "input" name="nacimiento" type="date" required />
          <br />
          <br />
          <label className = "label" for="contraseña">Contraseña</label>
          <br />
          <input className = "input" name="contraseña" type="password" required />
          <br />
          <br />
          <br />
          <button className="button">Registrarse</button>
        </form>
    </div>
  )
}


export default Componente_register;