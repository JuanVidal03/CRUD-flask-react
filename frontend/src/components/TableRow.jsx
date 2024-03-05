// iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen, faTrash } from "@fortawesome/free-solid-svg-icons"

const TableRow = ({persona}) => {
    return (
        <tr>
            <td className="border p-3 text-center">{persona.cedula}</td>
            <td className="border p-3 text-center">{persona.nombre}</td>
            <td className="border p-3 text-center">{persona.mail}</td>
            <td className="border p-3 text-center">{persona.telefono}</td>
            <td className="border p-3">
                <div className="flex justify-center items-center gap-4">
                    <FontAwesomeIcon className="cursor-pointer text-xl" icon={faFilePen}/>
                    <FontAwesomeIcon className="cursor-pointer text-xl" icon={faTrash}/>
                </div>
            </td>
        </tr>
    );
}

export default TableRow;