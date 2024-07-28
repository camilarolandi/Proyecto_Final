/* Pantalla de contactos*/


import React, { useEffect, useState } from 'react'
import { MOOK_CONTACTOS } from '../../../Mook'
import {Link, useParams} from 'react-router-dom'
import { MyProfile } from '../../Components/MyProfile/MyProfile'
import "./contactos.css"
import '../../styles.css'
import { NuevoContacto } from '../../Components/NuevoContacto/NuevoContacto'



export const Contactos = ({ContactSelect}) => {

    const [listaContactos, setListaContactos] = useState([])
    const [searchString, setSearchString] = useState('')
    const [modoChange, setModoChange] = useState(false)
    const [showMyProfile, setShowMyProfile] = useState(false)
    const { contactoID } = useParams()
	const contacto = MOOK_CONTACTOS.find (contacto => contacto.id === Number(contactoID))
    const [contactos_data, setContactosInfo]= useState(contacto)
    

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

const newContacto = (nvoNombre,nvoApellido,nvoTelefono) => {
		
    const contacto_nvo =   {
    nombre:  nvoNombre,
    apellido: nvoApellido ,
    telefono: nvoTelefono,
    estado:"Disponible",
    direccion:"Ruta 23",
  /*   thumbnail:"", */
    estado_contacto:"En linea",
    id: contactos_data.length + 1
    }	
	
    setContactosInfo([...contactos_data,contacto_nvo])

}

    return (
        <>
          {/*   <NuevoContacto nvoContact={newContacto}/> */}
            <div className ={`contact-screen ${modoChange ? 'modo-claro' : ''}`} >
                
                <header className='photo-profile-cont'>
                    <img className='myprofile-photo' 
                    src='https://www.creartuavatar.com/images/f17.svg'
                    onClick={showProfile}
                    />
                    {showMyProfile && <MyProfile onClose={hideProfile}/>}
                    <div className='icons-fns-left'>
                        <i className="icons-left bi bi-people"></i>
                        <Link to ={"/nvocontacto/"} > <i className= "icons-left bi bi-disc" ></i></Link> 
                        <i className= "icons-left bi bi-chat-quote" ></i>
                        <i className= "icons-left bi bi-chat-right-dots"></i>
                        <i className= "icons-left bi bi-three-dots-vertical" ></i>
                        </div>
                        <div className='mobile icons-fns-left'>
                            <i class=" punto bi bi-three-dots"></i>  
                            <div className='icons-left'>
                            <i className=" punto bi bi-camera"></i>
                            <i className=" add punto bi bi-plus-lg"></i>
                            </div>
                        </div>
                </header>
                

                {/* CLASE: CAMBIO DE MODO: NO ESTA BIEN :|  ) */}
                {/*  <header className= {`icons-header ${ modoChange ? 'modo-claro-2' : ''}`} >

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

                    </header>  */}               
                    <div className='contactos-header'>
                    <span className='titulos-contactos'>Chats</span>
                    <input 
                    className={`input-buscar ${modoChange ? 'modo-claro-2' : ''}`} 
                    type="text" 
                    placeholder='Buscar contacto' 
                    onChange={handleSearch} 
                    value={searchString} />
                    {listaContactos.length === 0 && searchString !== '' && (
                    < span className= {`string ${modoChange ? 'modo-claro' : ''}`} >No se encuentran resultados</span>)}

                    <div className='chat-options'>
                        <span className='opt my-data'>Todos</span>
                        <span className='opt my-data'>No leidos</span>
                        <span className='fav opt my-data'>Favoritos</span>
                        <span className='opt my-data'>Grupos</span>
                    </div>
                </div>
                <div className={`contacts ${modoChange ? 'modo-claro' : ''}`}>
                    {listaContactos.map(contacto=>{
                        return(
                            <div className= "contact-cont" /* {`contact-cont ${modoChange ? 'modo-claro' : ''}`}  key = {contacto.id} */>
                                <div className='contacto-data'>
                                    <Link className='photo-link' to = {"/screen/" + contacto.id}>
                                    <img className='photos' 
                                    src= {contacto.thumbnail} 
                                    alt="profile-photos" 
                                    onClick= {ContactSelect}
                                    />
                                    </Link>
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
            <div className='container-opciones-mobile'>
                <div className='icons-mobile'>
                    <i class="bi bi-circle-square"></i>
                    <span>Novedades</span>
                </div>
                <div className="icons-mobile">
                    <i className="bi bi-telephone"></i>
                    <span>LLamadas</span>
                </div>
                <div className="icons-mobile">
                    <i className="bi bi-people-fill"></i>
                    <span>Comunidades</span>
                </div>
                <div className="icons-mobile">
                    <i className="bi bi-chat"></i>
                    <span>Chats</span>
                </div>
                <div className="icons-mobile">
                    <i className="bi bi-gear-wide-connected"></i>
                    <span>Configuracion</span>
                </div>
                </div>                    
            </div>  
            </>
    )
}



/* FETCH */
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

