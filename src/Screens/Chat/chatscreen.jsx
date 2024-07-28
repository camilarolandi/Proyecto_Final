/* Pantalla del chat */

import React, { useEffect, useState } from 'react'
import { MOOK_CONTACTOS } from '../../../Mook'
import {  Route, Routes, useParams } from 'react-router-dom'
import { ContactoData, Header, ListaDeMensajes, NuevoMje } from '../../Components'
import "./screenchat.css"
import '../../styles.css'
import { Contactos } from '../Contactos/Contactos'

	
	export const Screen = ( ) => {

	const { contactoID } = useParams()
	const contacto = MOOK_CONTACTOS.find (contacto => contacto.id === Number(contactoID))
	const {mensajes} = contacto
	const [mensajes_data, setMensajesInfo]= useState(mensajes)
	
	useEffect(()=> {

		setMensajesInfo(mensajes)

	}, [contactoID,mensajes]
)
	
	const newMensaje = (nuevoMensaje) => {
		
		const mje_nvo =   {
			author: "Yo",
			text: nuevoMensaje,
			estado: 'Visto',
			day: 'Hoy',
			hour: "12:30",
			id: mensajes_data.length + 1
		}		
		setMensajesInfo([...mensajes_data,mje_nvo])
	
}

	 return (
		<>
			
			<div className='screen-chat'>
			<Header/>
			<ListaDeMensajes mensajes_info = {mensajes_data} />
			<NuevoMje enviarMensaje={newMensaje}/>

		</div>
		</>
		
		)
	}  
 

 /* 	return (
		<div className='contact-screen-container'>
			<Contactos/> 
			<div className='screen-chat'>
			<Header/>
			<ListaDeMensajes mensajes_info = {mensajes_data} />
			<NuevoMje enviarMensaje={newMensaje}/>
			
		</div>
		</div>
		
		)
	}    */