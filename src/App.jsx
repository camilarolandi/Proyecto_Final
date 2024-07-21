/* cuando escribo JSX hago el import con import */
/* aca en App importo el screen de chat */
import React from 'react'

import { ContactoData, ListaDeMensajes, MyProfile } from './Components'
import { Contactos, Screen } from './Screens'
import { Route, Routes } from 'react-router-dom'




const App = () => {
return(

    <Routes>
        <Route path = "/" element = {<Contactos/>} />
        {/* <Route path = "/" element = {<Screen/>} /> */}
      {/*   <Route path="/contactos/:contactoID/*" element={<Screen />} /> */}
		<Route path = "/screen/:contactoID" element = {<Screen/>}/>  
        {/* <Route path= "/contactos/:contactoID" element={<Contactos/>} />   */}
        <Route path= "/contactodata/:contactoID" element={<ContactoData/>} /> {/* la uso en el header para por medio de un link en la foto, acceder al detalle del contacto */}
        <Route path= "/myprofile/" element={<MyProfile/>} /> 
    </Routes>
    )

}

export default App

