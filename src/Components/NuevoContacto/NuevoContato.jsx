
import React from 'react'

export const NuevoContacto = ({contactoNuevo}) => {

const handleSubmitNewContacto=(e) =>{
		e.preventDefault()
		const nuevoNombre= e.target.nombre.value
		const nuevoApellido = e.target.apellido.value
		const nuevoTelefono = e.target.telefono.value
		const nuevoThumbnail = e.target.thumbnail.value
        contactoNuevo(nuevoNombre,nuevoApellido,nuevoTelefono,nuevoThumbnail)
        e.target.reset()
	} 

	return (
		<div >
			<form onSubmit={handleSubmitNewContacto} >
                
                <label>Nombre</label>
				<input className= "input-texto" type="text" name="nombre" id="nombre" placeholder='Nombre'/>
                <label>Apellido</label>
				<input className= "input-texto" type="text" name="apellido" id="apellido" placeholder='Apellido'/>
                <label>Telefono</label>
				<input className= "input-texto" type="text" name="telefono" id="telefono" placeholder='Telefono'/>
				<label>Thumnail</label>
				<input className= "input-texto" type="text" name="thumbnail" id="thumbnail" placeholder='Thumbnail'/>
				<button  type='submit'>enviar</button>
			</form>
		</div>
	)
}

	
	
	