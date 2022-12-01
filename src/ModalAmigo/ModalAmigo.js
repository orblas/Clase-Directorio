import React from "react";
import './ModalAmigo.css'
import {ContactoContext} from "./../Context/ContactoProvider";


function ModalAmigo(){

    let {setModal, agregarAmigo} = React.useContext(ContactoContext);
    let[amigui,setAmigui]=React.useState({
            nombre:"",
            correo:"",
            telefono:""
    });

    const modalCancelar=(event)=>{
        event.preventDefault();
        console.log("Entra")
        setModal(false);
    }

    const modalGuardar=(event)=>{
        event.preventDefault();
        console.log(amigui);
        agregarAmigo(amigui);
        setModal(false);
    }

    const onChangeNombre=(event)=>{
        let amiguiTemporal=amigui;
        amiguiTemporal.nombre=event.target.value;
        setAmigui(amiguiTemporal);
    }

    const onChangecorreo=(event)=>{
        let amiguiTemporal=amigui;
        amiguiTemporal.correo=event.target.value;
        setAmigui(amiguiTemporal);
    }

    const onChangetelefono=(event)=>{
        let amiguiTemporal=amigui;
        amiguiTemporal.telefono=event.target.value;
        setAmigui(amiguiTemporal);
    }

    return(
        <div className="modal">
            <h1 className="modal_header">Nuevo Amigo+</h1>
            <form className="modal_formulario">
                <input typeof="text" placeholder="Nombre" onChange={onChangeNombre}></input>
                <input typeof="text" placeholder="Correo" onChange={onChangecorreo}></input>
                <input typeof="text" placeholder="Telefono" onChange={onChangetelefono}></input>
                <div>
                    <button typeof="submit" onClick={modalGuardar}>Guardar</button>
                    <button onClick={modalCancelar}>Cancelar</button>
                </div>
            </form>

        </div>
    )
}


export default ModalAmigo;