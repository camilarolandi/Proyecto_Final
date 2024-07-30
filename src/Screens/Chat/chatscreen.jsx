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
   
	
	const unselectContact = (contact) => {
		contact.is_selected = false
	}

	useEffect(()=> {

		setMensajesInfo(mensajes)

	}, [contactoID,mensajes]
)
	
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
			<Header unselectContact={ unselectContact }/>
			<ListaDeMensajes mensajes_info = {mensajes_data} />
			<NuevoMje enviarMensaje={newMensaje}/>

		</div>
		</>
		
		)
	}  
 


 



/* 	import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header, ListaDeMensajes, NuevoMje } from '../../Components';
import "./screenchat.css";
import '../../styles.css';

export const Screen = () => {
    const { contactoID } = useParams();
    const [contacto, setContacto] = useState(null);
    const [mensajes_data, setMensajesInfo] = useState([]);

    // Obtener la lista de contactos desde el almacenamiento local
    const fetchContactosFromLocalStorage = () => {
        const storedContactos = localStorage.getItem('contactos');
        return storedContactos ? JSON.parse(storedContactos) : [];
    };

    useEffect(() => {
        const contactos = fetchContactosFromLocalStorage();
        const selectedContacto = contactos.find(c => c.id === Number(contactoID));
        if (selectedContacto) {
            setContacto(selectedContacto);
        } else {
            console.error('Contacto no encontrado:', contactoID);
        }
    }, [contactoID]);

    useEffect(() => {
        if (contacto) {
            setMensajesInfo(contacto.mensajes);
        }
    }, [contacto]);

    const unselectContact = (contact) => {
        contact.is_selected = false;
        const contactos = fetchContactosFromLocalStorage();
        const updatedContactos = contactos.map(c =>
            c.id === contact.id ? { ...c, is_selected: false } : c
        );
        localStorage.setItem('contactos', JSON.stringify(updatedContactos));
    };

    const newMensaje = (nuevoMensaje) => {
        if (contacto) {
            const mje_nvo = {
                author: "Yo",
                text: nuevoMensaje,
                estado: 'Visto',
                day: 'Hoy',
                hour: "12:30",
                id: mensajes_data.length + 1
            };
            const updatedMensajes = [...mensajes_data, mje_nvo];
            setMensajesInfo(updatedMensajes);

            // Actualizar los mensajes del contacto en el almacenamiento local
            const contactos = fetchContactosFromLocalStorage();
            const updatedContactos = contactos.map(c =>
                c.id === Number(contactoID) ? { ...c, mensajes: updatedMensajes } : c
            );
            localStorage.setItem('contactos', JSON.stringify(updatedContactos));
        }
    };

    return (
        <div className='screen-chat'>
            <Header unselectContact={unselectContact} /> 
            <ListaDeMensajes mensajes_info={mensajes_data} />
             <NuevoMje enviarMensaje={newMensaje} /> 
        </div>
    );
};
 */
	