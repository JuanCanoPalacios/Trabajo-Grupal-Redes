import React from "react"
import './style_register.css'
import axios from 'axios'
import { useForm } from 'react-hook-form'

const Register = () => {

    const {register, formState: { errors }, handleSubmit} = useForm()  /*  Funciones que se utilizan extraidas de react-hook-form  */

    let validate = true;

    const onSubmit = async (data, e) => {

        let dniEmail;

        await axios.get('http://localhost:3001/users/dni&email')        /* Peticion del dni e email de los usuarios en la base de datos */
        .then(res => {
            dniEmail = res.data.response[0]
            console.log(dniEmail)
        })
        
        dniEmail.forEach(e => {
            if (e.dni === data.dni || e.email === data.email) validate = false      /* Valida que el mail y dni ingresados por el usuario no existan ya en la BD */
        })

        if (validate){
            axios.post('http://localhost:3001/users',{      /* Postea el usuario registrado a la base de datos */
                ...data,
                descripcion: 'asd',
                imagen: 'asd',
                id_empresa:1
            })
        }
        else alert("El DNI o Email ingresado ya esta existente dentro de nuestra base de datos.")


        e.target.reset()
    } 

    return(
    <section className="vh-100 bg-image bk_register" >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3 ">
            <div className="container h-100 py-5 ">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card " >
                    <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Crear una cuenta</h2>

                    <form  onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-outline mb-4">
                        <input type="text"  className="form-control form-control-lg" {...register('nombre_usuario', { required: { value: true, message: 'Nombre Requerido' } })}/>
                        <span className="text-danger text-small d-block mb-2">
                            { errors?.nombre_usuario?.message }
                        </span>
                        <label className="form-label" for="nombre">Nombre</label>
                        </div>

                        <div className="form-outline mb-4">
                        <input type="text"  className="form-control form-control-lg" {...register('apellido_usuario', { required: { value: true, message: 'Apellido Requerido' } })}/>
                        <span className="text-danger text-small d-block mb-2">
                            { errors?.apellido_usuario?.message }
                        </span>
                        <label className="form-label" for="apellido">Apellido</label>
                        </div>

                        <div className="form-outline mb-4">
                        <input type="text" className="form-control form-control-lg"  {...register('apodo', { required: { value: true, message: 'Apodo Requerido' } })}/>
                        <span className="text-danger text-small d-block mb-2">
                            { errors?.apodo?.message }
                        </span>
                        <label className="form-label" for="apodo">Apodo</label>
                        </div>
                        
                        
                        <div className="form-outline mb-4">
                        <input type="number" className="form-control form-control-lg"  {...register('dni', { required: { value: true, message: 'Dni Requerido' }, valueAsNumber: true })}/>
                        <span className="text-danger text-small d-block mb-2">
                            { errors?.dni?.message }
                        </span>
                        <label className="form-label" for="dni">Dni</label>
                        </div>

                        <div className="form-outline mb-4">
                        <input type="text"  className="form-control form-control-lg" {...register('pais', { required: { value: true, message: 'Pais Requerido' } })} />
                        <span className="text-danger text-small d-block mb-2">
                            { errors?.pais?.message }
                        </span>
                        <label className="form-label" for="pais">Pais</label>
                        </div>

                        <div className="form-outline mb-4">
                        <input type="text"  className="form-control form-control-lg" {...register('localidad', { required: { value: true, message: 'Localidad Requerido' } })}/>
                        <span className="text-danger text-small d-block mb-2">
                            { errors?.localidad?.message }
                        </span>
                        <label className="form-label" for="localidad">Localidad</label>
                        </div>

                        <div className="form-outline mb-4">
                        <input type="number"  className="form-control form-control-lg" {...register('telefono', { required: { value: true, message: 'Telefono Requerido' } })}/>
                        <span className="text-danger text-small d-block mb-2">
                            { errors?.telefono?.message }
                        </span>
                        <label className="form-label" for="telefono">Telefono</label>
                        </div>

                        <div className="form-outline mb-4">
                        <input type="email"  className="form-control form-control-lg" {...register('email', { required: { value: true, message: 'Email Requerido' } })}/>
                        <span className="text-danger text-small d-block mb-2">
                            { errors?.email?.message }
                        </span>
                        <label className="form-label" for="email">Email</label>
                        </div>

                        <div className="form-outline mb-4">
                        <input type="password"  className="form-control form-control-lg" {...register('contraseña', { required: { value: true, message: 'Contraseña Requerida' } })}  />
                        <span className="text-danger text-small d-block mb-2">
                            { errors?.contraseña?.message }
                        </span>
                        <label className="form-label" for="contraseña">Contraseña</label>
                        </div>

                        <div className="d-flex justify-content-center">
                        <button type="submit" className='css-button-sliding-to-top--blue ' >Registrarse</button>
                        </div>
                    </form>

                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    )
}

export default Register