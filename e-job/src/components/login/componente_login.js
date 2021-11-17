import React, { Component } from 'react';
import Header from './header'; //importar componente.
import Texto_inicial from './texto_inicial';
import Contenedor_principal from './contenedor_principal';

class Componente_login extends Component
{
render(){
	return(
<React.Fragment>
	<Header />	
	<Texto_inicial />	
	<Contenedor_principal />
</React.Fragment>
	      );
        }
}

export default Componente_login;