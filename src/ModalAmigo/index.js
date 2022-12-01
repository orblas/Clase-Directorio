import React from "react";
import './index.css';


function ModalAmigo(){
    let {setmodal,agregarAmigo}=React .useContext(ContactoContex);
    let [amigui.setAmigui]=React.useState({

    });
     const modalCancelar=(event)=>{
     event.preventDefault();
    
    }
    const modalGuardar=(event)=>{
        event.preventDefault();
       
       }
     return(
       <div className="modal">
         <h1 className="modal_header"> nuevo amigo</h1>
         <from>
            <input typeof="text" placeholder="nombre" value={amigui.nombre} onChange={onChangemodal}/>
            <input typeof="text" placeholder="email" value={amigui.email} onChange={onChangemodal}/>
            <input typeof="text" placeholder="telefono"/>
            <button typeof="submit>">Guardar</button>
            <button onClick={modalGuardar}>Guardar</button>
            <button onClick={modalCancelar}>Cancelar</button>
         </from>

       </div>
    )
}

export default ModalAmigo();