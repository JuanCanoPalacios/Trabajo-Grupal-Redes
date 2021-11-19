import './login.css'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Button from './Button'
import { useContext, useState } from 'react'
import { StoreContext } from '../../store/StoreProvider'


const Login = () => {

    const {register, formState: { errors }, handleSubmit} = useForm()  /*  Funciones que se utilizan extraidas de react-hook-form  */


    const [store, dispatch] = useContext(StoreContext)

    const [validate, setValidate] = useState(false)

    const [info, setInfo] = useState([])

    const [id, setId] = useState(0)

    // let validate = false;
    const onSubmit = async (data) => {

        await axios.get('http://localhost:3001/users/email&contra')
        .then(res => {
            console.log(res.data.response[0])
            setInfo(res.data.response[0])
        })
        
        info.forEach(e => {
            if (e.email === data.email || e.contraseña === data.contraseña) {
                setValidate(true)
                setId(e.id_usuario)
            }     /* Valida que el mail y dni ingresados por el usuario no existan ya en la BD */
        })

        // validate === true ? alert(`Bienvenido a E-JOB ${data.apodo}`) : alert("El email o la contraseña son incorrectos")

    } 


    return (
        <section class="vh-100 bg-login">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card bg-dark text-white" style={{borderRadius: "1rem"}}>
                    <div className="card-body p-5 text-center">

                        <div className="mb-md-5 mt-md-4 pb-5">

                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                        <p className="text-white-50 mb-5">Por favor, ingrese su Email y su contraseña!</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-outline form-white mb-4">
                                <input type="email" className="form-control form-control-lg" {...register('email', {required: {value: true, message: 'Ingrese el mail'}})}/>
                                <span className="text-danger text-small d-block mb-2">
                                { errors?.email?.message }
                                </span>
                                <label className="form-label" for="typeEmailX">Email</label>
                            </div>

                            <div className="form-outline form-white mb-4">
                                <input type="password" className="form-control form-control-lg" {...register('contraseña', {required: {value: true, message: 'Ingrese el mail'}})}/>
                                <span className="text-danger text-small d-block mb-2">
                                    { errors?.email?.message }
                                </span>
                                <label className="form-label" for="typePasswordX">Contraseña</label>
                            </div>
                            <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Olvidaste tu contraseña?</a></p>

                            
                            <Button validate={validate} id={id} />
                            {/* <Link to='/main' className="css-button-sliding-to-top--black" type="submit">Ingresar</Link> */}
                        </form>


                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                            <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                            <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                            <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                        </div>

                        </div>

                        <div>
                        <p class="mb-0">No tienes una cuenta? <Link to='/register' className="text-white-50 fw-bold">Registrate!</Link></p>
                        </div>

                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Login