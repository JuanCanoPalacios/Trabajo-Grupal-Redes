import React, { Component } from 'react';
import Header from './header'; //importar componente.
import Texto_inicial from './texto_inicial';
import Contenedor_principal from './contenedor_principal';
import './login.css'

const Componente_login = () => {
	return(
		<React.Fragment>
			<header>
				<center>
				<h1 class="h1">
					E-JOB
				</h1>
				</center>
			</header>
			<center>
				<p class="parrafo">
					Una página que ayuda a los gamers a encontrar equipos profesionales.
				</p>
        	</center>
			<Contenedor_principal />
		</React.Fragment>

	)
}
export default Componente_login;