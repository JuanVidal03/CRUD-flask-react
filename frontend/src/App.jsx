// importando dependencias
import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
// importando las rutas
const PublicRoutes = lazy(() => import('./routes/Public.routes.jsx'));

function App() {

  return (
    <Suspense fallback='Cargando...'>
      <BrowserRouter>
        <PublicRoutes/>
      </BrowserRouter>
    </Suspense>
  )
}

export default App