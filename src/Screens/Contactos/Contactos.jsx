/* Pantalla de contactos*/
import React, { useEffect, useState } from 'react'
import { MOOK_CONTACTOS } from '../../../Mook'
import {Link, useParams} from 'react-router-dom'
import { MyProfile } from '../../Components/MyProfile/MyProfile'
import "./contactos.css"
import '../../styles.css'
import { useLocation } from 'react-router-dom'
import { NuevoContacto} from '../../Components/NuevoContacto/NuevoContato'

export const Contactos = ({ContactSelect,hideWelcome}) => {
    const location = useLocation();
    const [listaContactos, setListaContactos] = useState([])
    const [searchString, setSearchString] = useState('')
    const [modoChange, setModoChange] = useState(false)
    const [showMyProfile, setShowMyProfile] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

   /*  const [contacto_data, setContactoInfo]= useState(MOOK_CONTACTOS ) */
    
    const newContacto = (nuevoNombre,nuevoApellido,nuevoTelefono,nuevoThumbnail) => {
		
		const newId = (listaContactos.length > 0 ? listaContactos[listaContactos.length - 1].id + 1 : 1)
			const contacto_nvo =   {
			nombre: nuevoNombre ,
			apellido: nuevoApellido ,
			telefono:nuevoTelefono ,
			estado:"En el trabajo",
			thumbnail: nuevoThumbnail,
			id: newId,
            mensajes: [{ text: '', hour: '' }] 
        }
        setListaContactos([...listaContactos,contacto_nvo])}

    const isChatSelected = listaContactos.some(contact => contact.is_selected === true)
    useEffect(() => {}, [location])
    useEffect (() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    let shouldRenderHtml = false;

    if ((windowWidth < 590 && ! isChatSelected) || windowWidth >= 590) {
        shouldRenderHtml = true
    }

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
    setSearchString(e.target.value)
}

const showProfile = () => {
    setShowMyProfile(true)
}

const hideProfile = () => {
    setShowMyProfile(false)
}

    return (
        <>
           <NuevoContacto contactoNuevo={newContacto}/> 
            {
                shouldRenderHtml &&
                <div className ={`contact-screen ${modoChange ? 'modo-claro' : ''}`} >
                <header className='photo-profile-cont'>
                    <img className='myprofile-photo' 
                    src='https://www.creartuavatar.com/images/f17.svg'
                    onClick={showProfile}
                    />
                    {showMyProfile && <MyProfile onClose={hideProfile}/>}

                    <div className='icons-fns-left'>
                        <i className="icons-left bi bi-people"></i>
                        <Link to= {"/nuevocontacto/"}><i className= "icons-left bi bi-disc" ></i></Link>
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
                                    <Link className='photo-link' onClick={() => ContactSelect(contacto)} to = {"/screen/" + contacto.id}>
                                    <img className='photos' 
                                    src= {contacto.thumbnail} 
                                    alt="profile-photos"
                                    onClick={hideWelcome}
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
            }
        </>
    )
}
