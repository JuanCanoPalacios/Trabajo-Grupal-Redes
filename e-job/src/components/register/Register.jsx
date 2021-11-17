import React from "react"
import './style_register.css'

const Register = () => {
                        
/* className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" */

    return(
    <section className="vh-100 bg-image bk_register" >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3 ">
            <div className="container h-100 py-5 ">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card " >
                    <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Crear una cuenta</h2>

                    <form>
                        <div className="form-outline mb-4">
                        <input type="text" id="form3Example1cg" className="form-control form-control-lg" />
                        <label className="form-label" for="form3Example1cg">Nombre</label>
                        </div>

                        <div className="form-outline mb-4">
                        <input type="text" id="form3Example1cg" className="form-control form-control-lg" />
                        <label className="form-label" for="form3Example1cg">Apellido</label>
                        </div>

                        <div className="form-outline mb-4">
                        <input type="text" id="form3Example1cg" className="form-control form-control-lg" />
                        <label className="form-label" for="form3Example1cg">Apodo</label>
                        </div>
                        
                        
                        <div className="form-outline mb-4">
                        <input type="text" id="form3Example1cg" className="form-control form-control-lg" />
                        <label className="form-label" for="form3Example1cg">Dni</label>
                        </div>

                        <div className="form-outline mb-4">
                        <input type="text" id="form3Example1cg" className="form-control form-control-lg" />
                        <label className="form-label" for="form3Example1cg">Pais</label>
                        </div>

                        <div className="form-outline mb-4">
                        <input type="text" id="form3Example1cg" className="form-control form-control-lg" />
                        <label className="form-label" for="form3Example1cg">Localidad</label>
                        </div>

                        <div className="form-outline mb-4">
                        <input type="text" id="form3Example1cg" className="form-control form-control-lg" />
                        <label className="form-label" for="form3Example1cg">Telefono</label>
                        </div>

                        <div className="form-outline mb-4">
                        <input type="email" id="form3Example3cg" className="form-control form-control-lg" />
                        <label className="form-label" for="form3Example3cg">Email</label>
                        </div>

                        <div className="form-outline mb-4">
                        <input type="password" id="form3Example4cg" className="form-control form-control-lg" />
                        <label className="form-label" for="form3Example4cg">Contraseña</label>
                        </div>

                        <div className="d-flex justify-content-center">
                        <button type="button" className='css-button-sliding-to-top--blue ' >Registrarse</button>
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