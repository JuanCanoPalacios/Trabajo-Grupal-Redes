import React from 'react';
import { Link } from 'react-router-dom';
import'./styles_login.css'; //importar hoja de estilos.

class Contenedor_principal extends React.Component{ //clase que se transforma en componente.
    render()
    {
        return(  
		<div class="container">
			<div class="d-flex justify-content-center h-100">
				<div class="card">
					<div class="card-header">
					<br />
				    <h3>Iniciar Sesión</h3>
					<div class="d-flex justify-content-end social_icon">
						<span><i class="fab fa-facebook-square"></i></span>
					    <span><i class="fab fa-google-plus-square"></i></span>
					    <span><i class="fab fa-twitter-square"></i></span>
				    </div>
				</div>
				<div class="card-body">
					<form action="/pagina_principal/index.html">
						<div class="input-group form-group">
							<div class="input-group-prepend">
								<span class="input-group-text"><i class="fas fa-user"></i></span>
						    </div>
							<input type="text" class="form-control" placeholder="nombre de usuario" required />
						</div>
						<div class="input-group form-group">
							<div class="input-group-prepend">
								<span class="input-group-text"><i class="fas fa-key"></i></span>
							</div>
							<input type="password" class="form-control" placeholder="contraseña" required />
						</div>
						<div class="row align-items-center remember">
							<input type="checkbox" />Recordarme
						</div>
						<div class="form-group">
							<Link class = "btn float-right login_btn" type="submit" to="/" >Entrar</Link>
							{/* <input class = "btn float-right login_btn" type = "submit" value = "Entrar" /> */}
						</div>
					</form>
				</div>
				<div class="card-footer">
							<div class="d-flex justify-content-center links">
								No tenés cuenta?<Link to="/register">Registrate</Link>
				            </div>
					<div class="d-flex justify-content-center">
						<a href="#">Olvidaste tu contraseña?</a>
				    </div>
			    </div>
			</ div>
		</div>		
	</div>
	);
    }
}

export default Contenedor_principal;