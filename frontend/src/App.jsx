// importando dependencias
import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
// importando las rutas
const PublicRoutes = lazy(() => import('./routes/Public.routes.jsx'));
// contexto
const GlobalContext = lazy(() => import('./context/GlobalContext.jsx'));

function App() {

  return (
    <Suspense fallback='Cargando...'>
      <GlobalContext>
        <BrowserRouter>
          <PublicRoutes/>
        </BrowserRouter>
      </GlobalContext>
    </Suspense>
  )
}

export default App