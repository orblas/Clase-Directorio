import React from "react";
import { ContactoContext } from "./Context/ContactoProvider";


function DummyComponent2(){
    const {edad,setDummy}=React.useContext(ContactoContext);
    const miFuncion=()=>{
        setDummy("Memo");
    }

    return(
        <React.Fragment>
            {edad}
        <button onClick={miFuncion}>Picale aqui</button>
        </React.Fragment>
    )
}

export default DummyComponent2;