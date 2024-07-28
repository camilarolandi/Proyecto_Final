/* La pantalla con la info del contacto */
import React from 'react'
import { MOOK_CONTACTOS } from '../../../Mook'
import { Link, useParams } from 'react-router-dom'
import "./contactodata.css"
import '../../styles.css'


export const ContactoData = () => {
        const {contactoID } = useParams()

            const contacto = MOOK_CONTACTOS.find(contacto => contacto.id === Number(contactoID));
            return (
                <div className='container-contact-data'>
                    <div className='container'>
                        <div className='header-container'>
                            <Link className='icon' to = {"/screen/" + contacto.id}><i className="bi bi-x-lg"></i></Link>
                            <span className='info'>Info. del contacto</span>
                        </div>
                            
                            <div className='container-nombre-foto-opciones'>
                                <div className='container-nombre-foto'>
                                    <img className='photo' src= {contacto.thumbnail} alt="profile-photos"/>
                                    <span className='data'>{contacto.telefono} </span>
                                    <span className='data'>{contacto.nombre_usuario}</span>
                                </div>
                                <div className='container-opciones'>
                                    
                                    <div className="icon-mje-buscar">
                                    <i className="bi bi-telephone"></i>
                                        <span>LLamar</span>
                                    </div>
                                    <div className='icon-mje-buscar'>
                                    <i className="bi bi-arrow-90deg-right"></i>
                                        <span>Compartir</span>
                                    </div>
                                    <div className="icon-mje-buscar">
                                    <i className="bi bi-search"></i>
                                        <span>Buscar</span>
                                    </div>
                                </div>
                            </div>
                            <div className='contenedor-fns'>
                                    <div className='funciones'>
                                        <div className='funcion'>
                                            <div className='icons-fns-right'>
                                                <i className="bi bi-image-fill"></i>
                                                <span>Archivos, enlaces y docs</span>
                                            </div>
                                            <div  className='icon-left-fn'>
                                                <span>12</span>
                                                <i className="bi bi-chevron-right"></i>
                                            </div>
                                        </div>
                                        <div className='funcion'>
                                            <div className='icons-fns-right'>
                                                <i className="bi bi-star"></i>
                                                <span>Mensajes destacados</span>
                                            </div>
                                            <div className='icon-left-fn'>
                                                <span>Ninguno</span>
                                                <i className="bi bi-chevron-right"></i>
                                        </div>
                                    </div>


                                    
                                </div>
                                <div className='funciones'>
                                        <div className='funcion'>
                                            <div className='icons-fns-right'>
                                                <i className="bi bi-flower1"></i>
                                                <span>Fondo</span>
                                            </div>
                                            <div  className='icon-left-fn'>
                                                <i className="bi bi-chevron-right"></i>
                                            </div>
                                        </div>
                                        <div className='funcion'>
                                            <div className='icons-fns-right'>
                                                <i className="bi bi-box-arrow-down"></i>
                                                <span>Guardar en Fotos</span>
                                            </div>
                                            <div className='icon-left-fn'>
                                                <span>Por defecto</span>
                                                <i className="bi bi-chevron-right"></i>
                                        </div>
                                    </div>
                                </div>
                                    
                            
                                
                            </div> 
                    
                    
                    
                    </div>
                    </div>
                )}












