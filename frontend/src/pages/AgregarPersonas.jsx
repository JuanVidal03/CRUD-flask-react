// dependencias
import { Suspense, lazy } from "react";
// layout
const LoggedLayout = lazy(() => import('../layout/Logged.jsx'));
// componentes
const Itulo = lazy(() => import('../components/Title.jsx'));


const AgregarPersonas = () => {
    // cambiendo el titulo de la pagina
    document.title = 'Agregar Personas | Juan Vidal'

    return (
        <Suspense fallback='Cargando...'>
            <LoggedLayout>
                <Itulo titulo='Agregar Personas'/>
            </LoggedLayout>
        </Suspense>
    );
}

export default AgregarPersonas;