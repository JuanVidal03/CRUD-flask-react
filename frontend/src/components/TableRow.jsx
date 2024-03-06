// dependencias
import { useState, useEffect, Suspense, lazy, useContext } from "react";
// iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen, faTrash } from "@fortawesome/free-solid-svg-icons";
// servivios de la api
import { eliminarPorCedula } from "../services/apiActions.js";
// contexto
import { GlobalContext } from "../context/GlobalContext.jsx";


const TableRow = ({persona}) => {

    // contexto 
    const context = useContext(GlobalContext);

    // persona encontrada
    const [cedulaPersonaEliminar, setCedulaPersonaEliminar] = useState('');
    // estado que cambia la accion, sirve para controlar el onclick
    const [confirm, setConfirm] = useState(false);
    // evento de eliminar persona
    const eliminarPersona = () => {
        setCedulaPersonaEliminar(persona.cedula)
        setConfirm(true)
    }

    // evento que actualizar la persona
    const actualizarPersonaFn = () => {
        context.setUpdatedPerson(persona)
        context.openModal();
    }

    useEffect(() => {
        // eliminar persona
        const deletePerson = async() => {
            const data = await eliminarPorCedula(cedulaPersonaEliminar);
            console.log(data);
            return data;
        }
        confirm && deletePerson();
        
    }, [confirm]);


    return (

        <Suspense fallback='Cargando...'>
            <tr>
                <td className="border p-3 text-center">{persona.cedula}</td>
                <td className="border p-3 text-center">{persona.nombre}</td>
                <td className="border p-3 text-center">{persona.mail}</td>
                <td className="border p-3 text-center">{persona.telefono}</td>
                <td className="border p-3">
                    <div className="flex justify-center items-center gap-4">
                        <FontAwesomeIcon onClick={actualizarPersonaFn} className="cursor-pointer text-xl" icon={faFilePen}/>
                        <FontAwesomeIcon onClick={eliminarPersona} className="cursor-pointer text-xl" icon={faTrash}/>
                    </div>
                </td>
            </tr>
        </Suspense>
    );
}

export default TableRow;