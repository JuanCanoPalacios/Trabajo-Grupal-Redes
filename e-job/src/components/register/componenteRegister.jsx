import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './style.css'
import axios from 'axios'

const ComponenteRegister = () => {


    // axios.get('https://a.4cdn.org/' + board + '/threads.json', config)
    //     .then(function (response) {
        //         console.log(response.data);
        // });
        
        useEffect(() => {
        var config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
        };
        axios.post('localhost:3001/users', config, {
            "nombre_usuario" : "Mateo",
            "apellido_usuario" : "Ferreyra",
            "apodo" : "Fede",
            "contraseña" : "soyfede",
            "dni": 2263749,
            "pais" : "Argentina",
            "localidad" : "Capital Federal",
            "telefono" : 1134567890,
            "email" : "fede@gmail.com",
            "id_empresa" : 1,
            "descripcion" : "hola123",
            "imagen" : "imagen"
        })
        .then(res => {
            const persons = res.data
            console.log(persons)
        })
    }) 

    const [todo, setTodo] = useState({
        nombre_usuario: '',
        apellido_usuario: '',
        email: '',
        nacimiento: '',
        contraseña: '',
    })

    const handleSubmit = async e => {
        e.preventDefault()

        const { nombre_usuario, apellido_usuario, email, nacimiento, contraseña } = todo

        if (!nombre_usuario.trim() || !apellido_usuario.trim() || !email.trim() || !nacimiento.trim() || !contraseña.trim()){
            alert("Todo correcto")
        }
        else{
            alert("Por favor, rellene todos los campos")
        }

    }

    const handleChange = e => {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="contenedor_principal">
            <div className = "div">
                <h1 className = "h1">Formulario de registro</h1> 
                <form className = "form" onSubmit={handleSubmit} >
                    <label className = "label" for="nombre">Nombre</label>
                    <br />
                    <input className = "input" name="nombre_usuario" type="text" onChange={handleChange} value={todo.nombre_usuario} required />
                    <br />
                    <br />
                    <label className = "label" for="apelido">Apellido</label>
                    <br />
                    <input className = "input" name="apellido_usuario" type="text"  onChange={handleChange} value={todo.apellido_usuario} required /> 
                    <br />
                    <br />
                    <label className = "label" for="correo">Correo electronico</label>
                    <br />
                    <input className = "input" name="email" type="email"  onChange={handleChange} value={todo.email} required />
                    <br />
                    <br />
                    <label className = "label" for="nacimiento">Fecha de nacimiento</label>
                    <br />
                    <input className = "input" name="nacimiento" type="date"  onChange={handleChange}  value={todo.nacimiento} required />
                    <br />
                    <br />
                    <label className = "label" for="contraseña">Contraseña</label>
                    <br />
                    <input className = "input" name="contraseña" type="password"  onChange={handleChange}  value={todo.contraseña}  required />
                    <br />
                    <br />
                    <br />
                    <Link to='/'  className="button" type='submit'>Registrarse</Link>
                </form>
            </div>
        </div>
    )
}

export default ComponenteRegister
