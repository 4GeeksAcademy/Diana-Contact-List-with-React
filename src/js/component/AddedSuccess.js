import React from 'react'
import { Link } from "react-router-dom";


const AddedSuccess = () => {
  return (
    <div className="jumbotron">
    <h1> Nuevo contacto ha sido añadido satisfactoriamente </h1>
    <Link to="/">
        <span className="btn">Regresar a lista de contactos</span>
    </Link>
  </div>
  )
}

export default AddedSuccess