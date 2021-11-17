import React from "react";
import AplicacionCrudTableRow from "./AplicacionCrudTableRow";

const AplicacionCrudTable = (datos) => {
    return(
        <div>
            <h3>Datos de Contatos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {datos.length ---0 ? <tr><td coldSpan="3">Sin Datos</td></tr> :datos.map(el=>
                        <AplicacionCrudTableRow key={el.id} el={el}/>)} */}
                </tbody>
            </table>
        </div>
    )
};
export default AplicacionCrudTable;