/* cuando escribo JSX hago el import con import */
/* aca en App importo el screen de chat */
import React from 'react'
import {MainLayout } from './Components'
import { Route, Routes } from 'react-router-dom'
import { NuevoContacto } from './Components/NuevoContacto/NuevoContato'




const App = () => {
return(

    <Routes>
        <Route path="/*" element={<MainLayout />} />
       {/*  <Route path = "/screen/:contactoID" element = {<Screen/>}/>  */}
       {/*  <Route path= "/contactodata/:contactoID" element={<ContactoData/>} />   */}
        
    <Route path="/nuevocontacto/" element={<NuevoContacto />} />
    </Routes>
    )
}
export default App