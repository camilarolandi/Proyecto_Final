import React, { useState } from 'react'
import { Contactos, Screen } from '../../Screens'
import { Route, Routes, useParams} from 'react-router-dom'
import { ContactoData } from '../Contacto-data/ContactoData'
import "./mainlayout.css"
import '../../styles.css'



	export const MainLayout = () => {
		const [showWelcome, setShowWelcome] = useState(true)


		const hideWelcome = () => {
			setShowWelcome(false)
		}
		


		return (
		<div className="main-layout">
			<Contactos ContactSelect={hideWelcome}/>  
			<Routes>	
				<Route path="/screen/:contactoID" element={<Screen />} />
				<Route path="/contactodata/:contactoID/screen" element={
					<>
						<ContactoData />
						<Screen />
					</>
				}/>
			</Routes> 

		{showWelcome && (
			<div className="welcome-screen">
				<h2 className='titulo-welcome'>Bienvenido a la aplicación de chat</h2>
				<p className='texto-welcome'>Seleccione un contacto para comenzar a chatear</p>
			</div> )}
		</div>
	)
	}


	/* const [contactComponent]= document.getElementsByClassName("contact-screen")
		const [chatsComponent]= document.getElementsByClassName("screen-chat")
		
		if(contactComponent && window.innerWidth < 590){
			contactComponent.style.display= "none"
		}
		if(chatsComponent && window.innerWidth < 590){
			chatsComponent.style.display= "flex"
		} */