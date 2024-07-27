/* La pantalla con la info del contacto */
import React from 'react'
import { MOOK_CONTACTOS } from '../../../Mook'
import { Link, useParams } from 'react-router-dom'
import "./contactodata.css"

export const ContactoData = () => {
        const {contactoID } = useParams()

            
            const contacto = MOOK_CONTACTOS.find(contacto => contacto.id === Number(contactoID));
            return (
                
                    <div className='container'>
                        <div className='header-container'>
                            <Link className='icon' to = {"/screen/" + contacto.id}><i class="bi bi-arrow-left"> </i></Link>
                            <span className='info'>Info. del contacto</span>
                        </div>
                            
                            <div className='container-nombre-foto-opciones'>
                                <div className='container-nombre-foto'>
                                    <img className='photo' src= {contacto.thumbnail} alt="profile-photos"/>
                                    <span className='data'>{contacto.telefono} </span>
                                    <span className='data'>{contacto.nombre_usuario}</span>
                                </div>
                                <div className='container-opciones'>
                                    <div className='icon-mje-buscar'>
                                        <i className="bi bi-chat"></i>
                                        <span>Mensaje</span>
                                    </div>
                                    <div className="icon-mje-buscar">
                                    <i className="bi bi-telephone"></i>
                                        <span>LLamar</span>
                                    </div>
                                    <div className="icon-mje-buscar">
                                    <i className="bi bi-search"></i>
                                        <span>Buscar</span>
                                    </div>
                                </div>
                            </div>
                            <div className='contenedor-fns'>
                            {/* <p className='data'>{contacto.estado} </p>
                                <span className='data'>{contacto.email}</span>
                                <span className='data'>{contacto.direccion} </span> */}
                                    <div className='funciones'>
                                        <div className='funcion'>
                                            <div className='icons-fns-right'>
                                                <i className="bi bi-image-fill"></i>
                                                <span>Archivos, enlaces y docs</span>
                                            </div>
                                            <div  className='icons-fns-left'>
                                                <span>12</span>
                                                <i className="bi bi-chevron-right"></i>
                                            </div>
                                        </div>
                                        <div className='funcion'>
                                            <div className='icons-fns-right'>
                                                <i className="bi bi-star"></i>
                                                <span>Mensajes destacados</span>
                                            </div>
                                            <div className='icons-fns-left'>
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
                                            <div  className='icons-fns-left'>
                                                <i className="bi bi-chevron-right"></i>
                                            </div>
                                        </div>
                                        <div className='funcion'>
                                            <div className='icons-fns-right'>
                                                <i className="bi bi-box-arrow-down"></i>
                                                <span>Guardar en Fotos</span>
                                            </div>
                                            <div className='icons-fns-left'>
                                                <span>Por defecto</span>
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
                                            <div  className='icons-fns-left'>
                                                <i class="bi bi-chevron-right"></i>
                                            </div>
                                        </div>
                                        <div className='funcion'>
                                            <div className='icons-fns-right'>
                                                <i className="bi bi-box-arrow-down"></i>
                                                <span>Guardar en Fotos</span>
                                            </div>
                                            <div className='icons-fns-left'>
                                                <span>Por defecto</span>
                                                <i class="bi bi-chevron-right"></i>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                    </div>
                )}












