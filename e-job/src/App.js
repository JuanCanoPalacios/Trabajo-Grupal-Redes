import React, { Component, Fragment } from 'react';
import Componente_login from './components/login/componente_login'; //importar componente.
import Componente_register from './components/register/componente_register';
import ComponenteRegister from './components/register/componenteRegister';
import Componente_registrado from './components/registrado/componente_registrado';
import './App.css'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Routes,
	Link,
	BrowserRouter
  } from "react-router-dom";

class App extends Component
{
render(){
	return(
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path='/login' element={<Componente_login />}></Route>
                    <Route path='/register' element={<ComponenteRegister />}></Route>
                    <Route exact path='/' element={<Componente_registrado />}></Route>
                </Routes>
            </Fragment>
        </BrowserRouter>
	      );
        }
}

export default App;