import React, { useState } from 'react'
import { Contactos, Screen } from '../../Screens'
import { Route, Routes, useParams} from 'react-router-dom'
import { ContactoData } from '../Contacto-data/ContactoData'
import "./mainlayout.css"
import '../../styles.css'



	export const MainLayout = () => {
		const [showWelcome, setShowWelcome] = useState(true)

		const contactSelect = (contact) => {
			contact.is_selected = true;
		}

		return (
		<div className="main-layout">
			<Contactos ContactSelect={contactSelect}/>  
			<Routes>	
				<Route path="/screen/:contactoID" element={<Screen />} />
				<Route path="/contactodata/:contactoID/screen" element={
					<>
						<ContactoData />
						<Screen />
					</>
				}/>
			</Routes> 
		</div>
	)
}
