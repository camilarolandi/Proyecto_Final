
import React from 'react'
import "./nuevocontacto.css"


export const NuevoContacto = () => {
    const handleSubmitNewMensaje =(e) =>{
		e.preventDefault()
		const nuevoMensaje = e.target.mensaje.value
        enviarMensaje(nuevoMensaje)
        e.target.reset()
	}

	return (
	
			<form className='nvo-contacto-form' onSubmit= {handleSubmitNewMensaje}>
            <label>Nombre</label>
                <input className= "input-texto" type="text" name="nombre" id="nombre" placeholder='Nombre'/>
                <label>Apellido</label>
                <input className= "input-texto" type="text" name="apellido" id="apellido" placeholder='Apellido'/>
                <label>Telefono</label>
                <input className= "input-texto" type="text" name="telefono" id="telefono" placeholder='Telefono'/>
                <button className= "btn" type='submit'>Agendar</button>
			</form>
	
	)
}
