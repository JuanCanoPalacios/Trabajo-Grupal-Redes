import React, { Component, Fragment } from 'react';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Main from './components/modulos_principal/main/Principal';
import Perfil from './components/modulos_perfil/perfil/Perfil';
// import Componente_login from './components/login/componente_login'; //importar componente.
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Routes,
	Link,
	BrowserRouter
  } from "react-router-dom";
import StoreProvider from './store/StoreProvider';

class App extends Component
{
render(){
	return(
        <BrowserRouter>
            <div>
                <StoreProvider>
                    <Routes>
                        <Route exact path='/login' element={<Login />}></Route>
                        <Route exact path='/register' element={<Register />}></Route>
                        <Route path ='/main' element={<Main />}></Route>
                        <Route path ='/perfil' element={<Perfil  />}></Route>
                        {/* <Route exact path='/' element={<Componente_registrado />}></Route> */}
                    </Routes>
                </StoreProvider>
            </div>
        </BrowserRouter>
	      );
        }
}

export default App;