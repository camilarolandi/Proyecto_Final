/* Listado de mensajes 
RECIBE EL ARRAY DE MENSAJES */


import React from 'react'
import { Mensajes } from '../Mensajes/Mensajes'
import "./listamjes.css"
import '../../styles.css'


export const ListaDeMensajes = ({mensajes_info}) => {
	return (
		<div className='contenedor-chats'>
			{
				mensajes_info.map((mensaje_info) => <Mensajes mensaje = {mensaje_info} key={mensaje_info.id} />)
			}
		</div>
	)
} 

/* import React, { useState, useEffect } from 'react';
import { obtenerContactos } from '../../Fetching/fetching';


export const MostrarMensajes = ({ contactoID }) => {
    const [mensajes, setMensajes] = useState([]);
    const [nombreContacto, setNombreContacto] = useState('')


    useEffect(() => {
        const obtenerMensajes = () => {
            obtenerContactos()
                .then(contactos => {
                    const contacto = contactos.find(c => c.id === contactoID);
                    if (contacto) {
                        setNombreContacto(contacto.nombre);
                        setMensajes(contacto.mensajes);
                        
                    } else {
                        console.log('Contacto no encontrado con ID', contactoID);
                        setError('Contacto no encontrado');
                    }
                })
        }

        obtenerMensajes()
    }, 
	
	[contactoID]
)

    return (
        <div>
            <h2>Mensajes de {nombreContacto}</h2>
            <div>
                {mensajes.map(mensaje => (
                    <li key={mensaje.id}>
                        <strong>{mensaje.author}:</strong> {mensaje.text}
                    </li>
                ))}
            </div>
        </div>
    )
}


 */