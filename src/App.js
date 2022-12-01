// import logo from './logo.svg';
import './App.css';
import React from 'react';

import Busqueda from './Busqueda/Busqueda';
import Lista from './Lista/Lista';
import Contacto from './Contacto/Contacto';
import AgregarAmigo from './AgregarAmigo';
import ModalAmigo from './ModalAmigo/ModalAmigo';

import {ContactoProvider,ContactoContext} from './Context/ContactoProvider';

function App(props) {

//   let contactos=[
//     {
//         nombre:"Guillermo",
//         telefono:"3221592771",
//         correo:"guillogallugdg@gmail.com"
//     },
//     {
//         nombre:"Mocho",
//         telefono:"3221592771",
//         correo:"mocho@gmail.com"
//     },
//     {
//         nombre:"Ñera",
//         telefono:"3221592771",
//         correo:"ñera@gmail.com"
//     },
//     {
//       nombre:"Gymbro",
//       telefono:"3221592771",
//       correo:"gymbroh@gmail.com"
//     },
//     {
//       nombre:"Gbro",
//       telefono:"3221592771",
//       correo:"gymbroh@gmail.com"
//     }
// ]

  

  return (
    <ContactoProvider>
      <ContactoContext.Consumer>
        {({cantidadAmigos,
        contactosFiltro,
        borrarAmigo,
        modal})=>(
          <React.Fragment>
            <h1>Mi lista de contactos</h1>
            <h3>Tengo {cantidadAmigos} amigos</h3>
            <Busqueda/>
          <AgregarAmigo></AgregarAmigo>
          <Lista>
            {
                contactosFiltro.map((contacto)=>{
                    return(<Contacto
                            nombre={contacto.nombre}
                            telefono={contacto.telefono}
                            correo={contacto.correo}
                            borrarAmigo={()=>borrarAmigo(contacto.telefono)}/>)
                })
            }
          </Lista>
          {contactosFiltro.length===0 && <h1>No tienes ningun amigo</h1>}
          {modal && <ModalAmigo/>}
          </React.Fragment>
        )}
    
      </ContactoContext.Consumer>
    </ContactoProvider>
  );

}
export default App;
