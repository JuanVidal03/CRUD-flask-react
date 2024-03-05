// importar depencias
import {  Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
// importar paginas
const Personas = lazy(() => import('../pages/Personas.jsx'));

const PublicRoutes = () => {
    return (
        <Suspense fallback='Cargando...'>
            <Routes>
                <Route path="/personas" element={<Personas/>}/>
            </Routes>
        </Suspense>
    );
}

export default PublicRoutes;
