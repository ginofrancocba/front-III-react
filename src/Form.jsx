import { useState } from "react";
import './Form.css';

function Form({onAddMusic}){

    const [nombre,setNombre]=useState("");
    const [apellido,setApellido]=useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
    
        if(nombre.trim().length >= 3 && apellido.trim().length >= 3 && apellido.length <= 6) {
            onAddMusic( { nombre, apellido } );
            setNombre("");
            setApellido("");
        } else {
            alert("!!! Por favor chequea que la información sea correcta !!!");
        }
    };

    return (

    <Form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Ingrese nombre" 
        value={nombre} 
        onChange={(e) => setNombre(e.target.value)} 
        />
        <input 
        type="text" 
        placeholder="Ingrese Apellido" 
        value={apellido} 
        onChange={(e) => setApellido(e.target.value)} 
        />
        <button type="submit">Agregar músico</button>        
    </Form>
    
    );
}

export default Form;