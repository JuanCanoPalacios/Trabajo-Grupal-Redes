import './login.css'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Fragment } from 'react'
import { StoreContext } from '../../store/StoreProvider'
import { types } from '../../store/StoreReducer'
const Button = ( {validate, id} ) => {


    console.log(id)

    const [store, dispatch] = useContext(StoreContext)

    if (validate === true){             /* Si la validacion es correcta, devuelve el Link para que al precionar el boton se redireccione a la ruta especificada, en caso contrario se devolvera el boton que no redirecciona a ninguna ruta */
         return(
            <Fragment>
                <Link to='/main' className="css-button-sliding-to-top--black" type="submit" onClick={() => {
                    console.log(id)
                    dispatch( 
                        { type: types.authLogin,
                          payload: id } 
                          )} } >Ingresar</Link>
                 
            </Fragment>
         )
        
    }
    else {
        return (

            <Fragment>
                <button className="css-button-sliding-to-top--black" >Ingresar</button>
            </Fragment>
        )
    }



}

export default Button
