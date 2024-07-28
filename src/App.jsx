/* cuando escribo JSX hago el import con import */
/* aca en App importo el screen de chat */
import React from 'react'
import {MainLayout } from './Components'
import { Route, Routes } from 'react-router-dom'
import { Contactos, Screen } from './Screens'
import { NuevoContacto } from './Components/NuevoContacto/NuevoContacto'


const App = () => {
return(

    <Routes>
        <Route path="/*" element={<MainLayout />} />
         <Route path="/nvocontacto/" element={<NuevoContacto />} /> 
      {/* <Route path = "/contactos/" element = {<Contactos/>}/>   */}
       {/*  <Route path= "/contactodata/:contactoID" element={<ContactoData/>} />   */}
    </Routes>
    )
}
export default App