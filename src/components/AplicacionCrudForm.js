// import AplicacionCrudTableRow from "./AplicacionCrudTableRow";
import React,{useState,useEffect} from "react";

const initialForm = {
    nombreContacto:"",
    apellidoContacto:"",
    emailContacto:"",
    id:null,
};

const AplicacionCrudForm =({createData,updateData,dataToEdit,setDataToEdit}) =>{
    const [form,setForm]= useState({initialForm});
    
    useEffect(()=> {
        if(dataToEdit){
            setForm(dataToEdit);
        
        }else{
            setForm(initialForm);

        }
    },[dataToEdit]);
0
    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })

    }
    const handleSubmit = (e)=>{

        if(form.id===null){
            createData(form);

        }else{
            updateData(form)
        }
    }
    const handleReset = (e)=>{
        setForm(initialForm);
        setDataToEdit(null);

    }
    return(
        <div>
            <h3>Agregar</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nombreContacto" placeholder="Nombre Contacto" onChange={handleChange} value={form.nombreContacto}/>
                <input type="text" name="apellidoContacto" placeholder="Apellido Contacto" onChange={handleChange} value={form.apellidoContacto}/>
                <input type="text" name="emailContacto" placeholder="Email Contacto" onChange={handleChange} value={form.emailContacto}/>
                <input type="submit" value="Enviar"/>
                <input type="reset" value="Limpiar" onClick={handleReset} />
            </form>
        </div>
    )
};
export default AplicacionCrudForm;