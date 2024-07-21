
import React from 'react'
import "./myprofile.css"
import { Link } from 'react-router-dom'

export const MyProfile = () => {
  return (
    <div className='profile-container'>
        <div className='header-profile'>
        <i className=" icon bi bi-arrow-left"></i>   
        <Link className='flecha' to = {"/" }><i class="bi bi-arrow-left"></i></Link>
        </div>
        <div className='data-profile'>
            <img className='photos'  src='https://www.creartuavatar.com/images/f17.svg'/>
            <div className='nombre-profile'>
                <span>Tu nombre</span>
                <div>
                    <span className='nombr-profile'>Juana</span>
                    <i className="bi bi-pencil"></i>

                </div>
              
            </div>
        </div>

    


    </div>
  )
}


/* import React, { useState } from 'react';

const EditableField = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState('Texto inicial'); // Aquí puedes poner el texto inicial que deseas mostrar

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Aquí podrías realizar una acción como guardar el texto editado en una base de datos o hacer alguna otra operación necesaria
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input type="text" value={text} onChange={handleChange} />
          <button onClick={handleSaveClick}>Guardar</button>
        </div>
      ) : (
        <div>
          <p>{text}</p>
          <button onClick={handleEditClick}>Editar</button>
        </div>
      )}
    </div>
  );
};

export default EditableField; */
