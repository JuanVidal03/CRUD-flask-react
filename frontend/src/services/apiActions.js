// importar axios para interactuar con la api
import axios from "axios";

// url base
const url = 'http://127.0.0.1:8080'

// obteniendo todos los productos
export const todasLasPersonas = async() => {
    try {
        const data = await axios.get(`${url}/personas-registradas`);
        return data.data;
    } catch (error) {
        console.log(`Error en el endpoint al traer todas las personas: ${error}`)
    }
}

// creando a una nueva persona
export const crearPersona = async(persona) => {
    try {
        const data = await axios.post(`${url}/agregar-persona`, persona);
        return data;
    } catch (error) {
        console.log(`Error en el endopoint al crear persona : ${error}`)
    }
}

// buscar persona por cedula
export const personaPorCedula = async(cedula) => {
    try {
        const persona = await axios.get(`${url}/personas-registradas/${cedula}`);
        return persona.data;
    } catch (error) {
        console.log(`Error al buscar la persona con cedula: ${cedula}`);
    }
}

// eliminar persona por cedula
export const eliminarPorCedula = async(cedula) => {
    try {
        const persona = await axios.delete(`${url}/personas-registradas/${cedula}`);
        return persona
    } catch (error) {
        console.log(`Error al buscar la persona con cedula: ${cedula}`);
    }
}