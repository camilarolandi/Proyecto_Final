import React, { useState } from 'react'

import { Contactos, Screen } from '../../Screens'
import "./mainlayout.css" 
import { Route, Routes, useParams} from 'react-router-dom'
import { ContactoData } from '../Contacto-data/ContactoData'



	export const MainLayout = () => {
		const [showWelcome, setShowWelcome] = useState(true)


		const hideWelcome = () => {
			setShowWelcome(false)
		}
			
		return (
		<div className="main-layout">
			<Contactos ContactSelect={hideWelcome}/>  
			<Routes>
     {/*    <Route path="/contactodata/:contactoID" element={<ContactoData />} /> */}
        <Route path="/screen/:contactoID" element={<Screen />} />
        
		<Route
          path="/contactodata/:contactoID/screen"
          element={
            <>
              <ContactoData />
              <Screen />
            </>
          }
        />
      </Routes> 

		{showWelcome && (
			<div className="welcome-screen">
				<h2 className='titulo-welcome'>Bienvenido a la aplicación de chat</h2>
				<p className='texto-welcome'>Seleccione un contacto para comenzar a chatear</p>
			</div> )}
		</div>

		
		
	)

	}


	