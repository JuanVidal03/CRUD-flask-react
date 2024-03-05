// importar depencias
import {  Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
// importar paginas
const AgregarPersonas = lazy(() => import('../pages/AgregarPersonas.jsx'));
const ListarPersonas = lazy(() => import('../pages/ListarPersonas.jsx'))

const PublicRoutes = () => {
    return (
        <Suspense fallback='Cargando...'>
            <Routes>
                <Route path="/" element={<AgregarPersonas/>}/>
                <Route path="/agregar-persona" element={<AgregarPersonas/>}/>
                <Route path="/personas-registradas" element={<ListarPersonas/>}/>
                <Route path="/personas-registradas/:cedula" element={<ListarPersonas/>}/>
            </Routes>
        </Suspense>
    );
}

export default PublicRoutes;
