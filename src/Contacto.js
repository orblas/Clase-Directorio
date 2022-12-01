import React from "react";


function Contacto(props){
    return(
        <div>
            <h2>{props.nombre}</h2>
            <p>
                {props.telefono} - {props.correo}
            </p>
        </div>
    );
}

export default Contacto