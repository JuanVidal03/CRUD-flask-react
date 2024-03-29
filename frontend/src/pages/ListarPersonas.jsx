// dependencias
import { Suspense, lazy, useEffect, useState, useContext } from "react";
// componentes
const Table = lazy(() => import('../components/Table.jsx'));
const Title = lazy(() => import('../components/Title.jsx'));
const ValidarSiHayPersona = lazy(() => import('../components/ValidarSiHayPersona.jsx'));
const ModalActualizar = lazy(() => import('../components/ModalActualizar.jsx'));
// layout
const LoggedLayout = lazy(() => import('../layout/Logged.jsx'));
// servicios de la api
import { todasLasPersonas } from "../services/apiActions.js";
// contexto
import { GlobalContext } from "../context/GlobalContext.jsx";



const ListarPersonas = () => {
    // usando contexto
    const context = useContext(GlobalContext);

    // cambiando el titulo de la pagina
    document.title = 'Personas Registradas | Juan Vidal';
    // estado para saber si hay personas o no
    const [personas, setPersonas] = useState([]);

    // renderizar dependiendo si hay personas registradas o no
    useEffect(() => {
        try {
            const fetchData = async() => {
                const data = await todasLasPersonas();
                setPersonas(data);
            }
            fetchData()
        } catch (error) {
            console.log(`Error al obtener las personas registradas: ${error}`);
        }
    }, [personas]);


    return (
        <Suspense fallback='Cargando...'>
            <LoggedLayout>
                <Title titulo='Personas Registradas'/>
                { personas?.length > 0 ? <Table/> : <ValidarSiHayPersona/> }
                { context.modalState && <ModalActualizar personaActualizar={context.updatedPerson}/> }
            </LoggedLayout>
        </Suspense>
    );
}

export default ListarPersonas;