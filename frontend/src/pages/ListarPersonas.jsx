// dependencias
import { Suspense, lazy } from "react";
// componentes
const Table = lazy(() => import('../components/Table.jsx'));
const Title = lazy(() => import('../components/Title.jsx'));
// layout
const LoggedLayout = lazy(() => import('../layout/Logged.jsx'));

const ListarPersonas = () => {
    // cambiendo el titulo de la pagina
    document.title = 'Personas Registradas | Juan Vidal'

    return (
        <Suspense fallback='Cargando...'>
            <LoggedLayout>
                <Title titulo='Personas Registradas'/>
                <Table/>
            </LoggedLayout>
        </Suspense>
    );
}

export default ListarPersonas;