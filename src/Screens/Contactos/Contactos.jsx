/* Pantalla de contactos*/


 import React from 'react'
import { MOOK_CONTACTOS } from '../../../Mook'
import { Link } from 'react-router-dom'
import "./contactos.css"



export const Contactos = () => {

    return (
    
    <>
            <div className ='contact-screen'>
                <div className='contactos-header'>
                    <div className='icons'>
                        <i className=" punto bi bi-three-dots"></i>
                        <div className='icons-fns-left'>
                        <i className=" punto bi bi-image-fill"></i>
                        <i className=" add bi bi-plus-lg"></i>
                        </div>
                    </div>
                    <span className='titulos-contactos'>Chats</span>
                    <input className='input-buscar' type="text" placeholder='Buscar' />

                </div>
                <div className='contacts'>
                    {MOOK_CONTACTOS.map(contacto=>{

                        return(
                    
                            <div className= "contact-cont" key = {contacto.id}>
                                <div className='contacto-data'>
                                    <Link className='photo-link' to = {"/screen/" + contacto.id}><img className='photos' src= {contacto.thumbnail} alt="profile-photos" /></Link>
                                    <div className='contacto-mje-nombre'>
                                        <span className='nombre-cont'>{contacto.nombre} {contacto.apellido}</span>
                                        <p className='mensaje-cont'> {contacto.mensajes[0].text}</p>
                                    </div>
                                </div>
                                    
                                <div>
                                    
                                    <span className='hour'>{contacto.mensajes[0].hour}</span>
                                </div>
                                
                            </div>
                
                        )

                    })}
                </div> 

        
                <div className='container-opciones'>
                                    <div className='icon-mje-buscar'>
                                    <i class="bi bi-circle-square"></i>
                                        <span>Novedades</span>
                                    </div>
                                    <div className="icon-mje-buscar">
                                    <i className="bi bi-telephone"></i>
                                        <span>LLamadas</span>
                                    </div>
                                    <div className="icon-mje-buscar">
                                    <i className="bi bi-people-fill"></i>
                                        <span>Comunidades</span>
                                    </div>
                                    <div className="icon-mje-buscar">
                                    <i className="bi bi-chat"></i>
                                        <span>Chats</span>
                                    </div>
                                    <div className="icon-mje-buscar">
                                    <i className="bi bi-gear-wide-connected"></i>
                                        <span>Configuracion</span>
                                    </div>
                                    
                                </div>
                
           
            </div>
                
        </>
    )
}




/* 
import React from 'react'
import { obtenerContactos } from '../../Fetching/fetching'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./contactos.css"


export const Contactos = () => {
    const [listaContactos, setListaContactos] = useState([])
    const [searchString, setSearchString] = useState('')
    const [loading, setLoading]=useState
    
    useEffect(
        () => {
                    obtenerContactos()
                    .then(   
                        (contactos)=> {
                            console.log('contactos', contactos)
                            if(searchString){
                                const nuevaListaContactos = contactos.filter(
                                    contacto => 
                                    contacto.nombre.toLowerCase().includes(searchString.toLowerCase())
                                )
                                setListaContactos(nuevaListaContactos)
                            }
                            else{
                                setListaContactos(contactos)
                            }

                        }
                    )
        },
        [searchString]
    )
    
    const handleChangeValue = (e) =>{
        console.log(e.target.value)
        setSearchString(e.target.value)
    }


    return (
    
    <>
            <div className ='contact-screen'>
                <div className='contactos-header'>
                    <span className='titulos-contactos'>Chats</span>
                    <input 
                    placeholder='Buscar' 
                    onChange={handleChangeValue} 
                    value={searchString} 
                    className='input-busqueda'
                    />
                    
                </div>
                <div className='contacts'>
                    {listaContactos.map(contacto=>{

                        return(
                    
                            <div className= "contact-cont" key = {contacto.id}>
                                <div className='contacto-data'>
                                    <Link className='photo-link' to = {"/screen/" + contacto.id}><img className='photos' src= {contacto.thumbnail} alt="profile-photos" /></Link>
                                    <div className='contacto-mje-nombre'>
                                        <span className='nombre-cont'>{contacto.nombre} {contacto.apellido}</span>
                                        <p className='mensaje-cont'> {contacto.mensajes[0].text}</p>
                                    </div>
                                </div>
                                    
                                <div>
                                    
                                    <span className='hour'>{contacto.mensajes[0].hour}</span>
                                </div>
                                
                            </div>
                
                        )

                    })}
                </div>    
            </div>
                
        </>
    )
}
 */

