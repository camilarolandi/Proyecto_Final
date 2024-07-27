/* Pantalla de contactos*/


import React, { useEffect, useState } from 'react'
import { MOOK_CONTACTOS } from '../../../Mook'
import {Link} from 'react-router-dom'
import "./contactos.css"
import { MyProfile } from '../../Components/MyProfile/MyProfile'



export const Contactos = ({ContactSelect}) => {

    const [listaContactos, setListaContactos] = useState([])
    const [searchString, setSearchString] = useState('')
    const [modoChange, setModoChange] = useState(false)
    const [showMyProfile, setShowMyProfile] = useState(false)

    
    useEffect ( () => {

        if (searchString ){
            const listaContactosFilter = MOOK_CONTACTOS.filter(contacto=> contacto.nombre.toLowerCase().includes(searchString.toLowerCase()) || contacto.apellido.toLowerCase().includes(searchString.toLowerCase()))
            
            setListaContactos(listaContactosFilter)
        }
        else {

            setListaContactos(MOOK_CONTACTOS)
            
        }
            
    },
    [searchString]
)

const handleSearch = (e) =>{
    console.log(e.target.value)
    setSearchString(e.target.value)
}
const modosChange = () => {
    setModoChange(modoClaro => !modoClaro)
}

const showProfile = () => {
    setShowMyProfile(true)
}

const hideProfile = () => {
    setShowMyProfile(false)
}

    return (

            <div className ={`contact-screen ${modoChange ? 'modo-claro' : ''}`} >
                
                <div className='photo-profile-cont'>
                    <img className='myprofile-photo' 
                    src='https://www.creartuavatar.com/images/f17.svg'
                    onClick={showProfile}
                    />
                    {showMyProfile && <MyProfile onClose={hideProfile}/>}

                    <div className='icons-fns-left-1'>
                        <i className={`icons-left bi bi-people ${modoChange ? 'modo-claro' : ''}`}></i>
                        <i className={`icons-left bi bi-disc ${modoChange ? 'modo-claro' : ''}`}></i>
                        <i className={`icons-left bi bi-chat-quote${modoChange ? 'modo-claro' : ''}`}></i>
                        <i className={`icons-left bi bi-chat-right-dots ${modoChange ? 'modo-claro' : ''}`}></i>
                        <i className={`icons-left bi bi-three-dots-vertical${modoChange ? 'modo-claro' : ''}`}></i>
                        </div>
                        <div className='icons-fns-left-2'>
                        <i className=" punto bi bi-camera"></i>
                        <i className=" add bi bi-plus-lg"></i>
                        
                        </div>
                </div>
                
                <header className= {`icons-header ${ modoChange ? 'modo-claro-2' : ''}`} >

                    <i className="punto p1 bi bi-three-dots-vertical"></i>
                    <button className="boton-alternar" onClick={modosChange}>
                <i className={`icons-left bi bi-power ${modoChange ? 'modo-claro' : ''}`}></i>
                </button>
                        <div className='icons-fns-left-2'>
                        <i className=" punto bi bi-camera"></i>
                        <i className=" add bi bi-plus-lg"></i>
                        
                        </div>
                        <div className='icons-fns-left-1'>
                        <i className={`icons-left bi bi-people ${modoChange ? 'modo-claro' : ''}`}></i>
                        <i className={`icons-left bi bi-disc ${modoChange ? 'modo-claro' : ''}`}></i>
                        <i className={`icons-left bi bi-chat-quote${modoChange ? 'modo-claro' : ''}`}></i>
                        <i className={`icons-left bi bi-chat-right-dots ${modoChange ? 'modo-claro' : ''}`}></i>
                        <i className={`icons-left bi bi-three-dots-vertical${modoChange ? 'modo-claro' : ''}`}></i>
                        </div>

                    </header>                
                    <div className='contactos-header'>
                    <span className='titulos-contactos'>Chats</span>
                    <input 
                    className={`input-buscar ${modoChange ? 'modo-claro-2' : ''}`} 
                    type="text" 
                    placeholder='Buscar contacto' 
                    onChange={handleSearch} 
                    value={searchString} />
                    {listaContactos.length === 0 && searchString !== '' && (
                    <span className= {`string ${modoChange ? 'modo-claro' : ''}`} >No se encuentran resultados</span>)}
                    <div className='chat-options'>
                        <span className='opt my-data'>Todos</span>
                        <span className='opt my-data'>No leìdos</span>
                        <span className='opt my-data'>Favoritos</span>
                        <span className='opt my-data'>Grupos</span>
                    </div>
                </div>
                <div className={`contacts ${modoChange ? 'modo-claro' : ''}`}>
                    {listaContactos.map(contacto=>{
                        return(
                            <div className= "contact-cont" /* {`contact-cont ${modoChange ? 'modo-claro' : ''}`}  key = {contacto.id} */>
                                <div className='contacto-data'>
                                    <Link className='photo-link' to = {"/screen/" + contacto.id}><img className='photos' src= {contacto.thumbnail} alt="profile-photos" onClick={ContactSelect}/></Link>
                                    <div className='contacto-mje-nombre'>
                                        <span className={`nombre-cont ${modoChange ? 'modo-claro' : ''}`}>{contacto.nombre} {contacto.apellido}</span>
                                        <p className={`mensaje-cont ${modoChange ? 'modo-claro' : ''}`}> {contacto.mensajes[0].text}</p>
                                    </div>
                                </div>
                                    
                                <div>
                                    
                                    <span className='hour'>{contacto.mensajes[0].hour}</span>
                                </div>
                                
                            </div>
                
                        )


                    })}
                </div> 

        
             {/*    <div className='container-opciones'>
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
                                    
                                </div> */}
                
            </div>  
       
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

/* PROBAR */
/* import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Archivo CSS donde definimos los estilos

const ContactoItem = ({ contacto }) => {
  const [claseComponente, setClaseComponente] = useState('photo-link');

  const cambiarClaseComponente = () => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    if (mediaQuery.matches) {
      setClaseComponente('photo-link media-query-active');
    } else {
      setClaseComponente('photo-link');
    }
  };

  return (
    <Link className={claseComponente} to={"/screen/" + contacto.id} onClick={cambiarClaseComponente}>
      <img className='photos' src={contacto.thumbnail} alt="profile-photos" />
    </Link>
  );
};

export default ContactoItem;
 */