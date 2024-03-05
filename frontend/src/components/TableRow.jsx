// dependencias
import { useState, useEffect } from "react";
// iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen, faTrash } from "@fortawesome/free-solid-svg-icons";
// servivios de la api
import { eliminarPorCedula } from "../services/apiActions.js";

const TableRow = ({persona}) => {

    // persona encontrada
    const [cedulaPersonaEliminar, setCedulaPersonaEliminar] = useState('');
    // estado que cambia la accion, sirve para controlar el onclick
    const [confirm, setConfirm] = useState(false);
    // evento de eliminar persona
    const eliminarPersona = () => {
        setCedulaPersonaEliminar(persona.cedula)
        setConfirm(true)
    }

    useEffect(() => {
        // todas las personas
        const deletePerson = async() => {
            const data = await eliminarPorCedula(cedulaPersonaEliminar);
            console.log(data);
            return data;
        }
        confirm && deletePerson();
        
    }, [confirm]);


    return (
        <tr>
            <td className="border p-3 text-center">{persona.cedula}</td>
            <td className="border p-3 text-center">{persona.nombre}</td>
            <td className="border p-3 text-center">{persona.mail}</td>
            <td className="border p-3 text-center">{persona.telefono}</td>
            <td className="border p-3">
                <div className="flex justify-center items-center gap-4">
                    <FontAwesomeIcon className="cursor-pointer text-xl" icon={faFilePen}/>
                    <FontAwesomeIcon onClick={eliminarPersona} className="cursor-pointer text-xl" icon={faTrash}/>
                </div>
            </td>
        </tr>
    );
}

export default TableRow;