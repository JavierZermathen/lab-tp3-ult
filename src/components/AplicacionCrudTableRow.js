import React from "react";

const AplicacionCrudTableRow = ({el})=>{

    return(
        <tr>
            <td>{el.nombreContacto}</td>
            <td>{el.apellidoContacto}</td>
            <td>{el.emailContacto}</td>
            <td>
                <button>Editar</button>
                <button>Eliminar</button>
            </td>

        </tr>
    );
};
export default AplicacionCrudTableRow;