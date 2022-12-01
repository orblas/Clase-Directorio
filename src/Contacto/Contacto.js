import React from "react";


function Contacto(props){

    function miFuncion(){
        props.borrarAmigo();
    }


    return(
            <div>
                    <h2>{props.nombre} </h2>
                    <h3>{props.telefono}</h3> 
                    <h3>{props.correo}</h3>
                <button className="btn" onClick={miFuncion}>Eliminar</button>
            </div>
    );
}

export default Contacto;