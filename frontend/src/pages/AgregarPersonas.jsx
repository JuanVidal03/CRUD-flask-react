// dependencias
import { Suspense, lazy, useState, useEffect } from "react";
// layout
const LoggedLayout = lazy(() => import('../layout/Logged.jsx'));
// componentes
const Itulo = lazy(() => import('../components/Title.jsx'));
// servicios de la api
import { crearPersona } from "../services/apiActions.js";


const AgregarPersonas = () => {
    // cambiendo el titulo de la pagina
    document.title = 'Agregar Personas | Juan Vidal';

    // valores de la persona a cear
    const [cedula, setCedula] = useState('');
    const [nombre, setNombre] = useState('');
    const [mail, setMail] = useState('');
    const [telefono, setTelefono] = useState('');
    // estado que obtiene los datos de la persona creada
    const [personaCreada, setPersonaCreada] = useState({});
    // confirmar el evento click para agregar persona
    const [confirm, setConfirm] = useState(false);

    // uniendo todos los datos en uno solo
    const esquemaPersona = {
        cedula,
        nombre,
        mail,
        telefono,
    }
    // actualizando el estado de la persona creada, y obteniendo su esquema
    const personaCreadaFn = () => {
        setPersonaCreada(esquemaPersona);
        setConfirm(true);
    }
    
    // llamar el servicio de la api y crear la persona
    useEffect(() => {
        const crearPersonaFn = async() => {
            const res = await crearPersona(personaCreada);
        }
        confirm && crearPersonaFn()
    }, [confirm]);

    return (
        <Suspense fallback='Cargando...'>
            <LoggedLayout>
                <Itulo titulo='Agregar Personas'/>
                <div>
                    <input onChange={(e) => setCedula(e.target.value)} type="text" placeholder="Cedula"/>
                    <input onChange={(e) => setNombre(e.target.value)} type="text" placeholder="Nombre"/>
                    <input onChange={(e) => setMail(e.target.value)} type="text" placeholder="Correo Electronico"/>
                    <input onChange={(e) => setTelefono(e.target.value)} type="text" placeholder="Telefono"/>
                    <button onClick={personaCreadaFn}>Agregar</button>
                </div>
            </LoggedLayout>
        </Suspense>
    );
}

export default AgregarPersonas;