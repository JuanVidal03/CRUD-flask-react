// importar axios para interactuar con la api
import axios from "axios";

// url base de las peticiones
const url = 'http://127.0.0.1:8080'

// obteniendo todos los productos
export const todasLasPersonas = async() => {
    try {
        const data = await axios.get(`${url}/personas-registradas`)
        return data.data;
    } catch (error) {
        console.log(`Error en el endpoint al traer todas las personas: ${error}`)
    }
}

// creando a una nueva persona
export const crearPersona = async(persona) => {
    try {
        const data = await axios.post(`http://127.0.0.1:8080/agregar-persona`, persona)
        console.log('Creando persona')
        console.log(data)
        return data;
    } catch (error) {
        console.log(`Error en el endopoint al crear persona : ${error}`)
    }
}