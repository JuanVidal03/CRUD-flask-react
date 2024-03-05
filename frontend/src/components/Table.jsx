// dependencias
import { useState, useEffect } from "react";
// servios de la API
import { todasLasPersonas } from "../services/apiActions.js";
// componentes
import TableRow from "./TableRow.jsx";


const Table = () => {

    // estado que maneja cuando la data se actualice
    const [personas, setPersonas] = useState([]);
    
    // trayaendo la data
    useEffect(() => {
        const fetchData = async() => {
            try {
                const data  = await todasLasPersonas();
                console.log(data)
                setPersonas(data)
            } catch (error) {
                console.log(`Error al renderizar las personas: ${error}`)
            }
        }
        fetchData()
    }, []);

    return (
        <table className="w-full bg-[#ffffff77] rounded-lg overflow-hidden backdrop-blur-sm max-h-[450px]">
            <thead>
                <tr className="bg-white">
                    <th className="border p-2">Cedula</th>
                    <th className="border p-2">Nombre</th>
                    <th className="border p-2">Correo Eléctronico</th>
                    <th className="border p-2">Telefono</th>
                    <th className="border p-2">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    // renderizando la data
                    personas?.map((persona, index) => (
                        <TableRow key={index} persona={persona}/>
                    ))
                }
            </tbody>
        </table>
    );
}

export default Table;