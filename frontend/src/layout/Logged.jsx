// dependencias
import { Suspense, lazy } from "react";
// componentes
const NavBar = lazy(() => import('../components/NavBar.jsx'));
const Footer = lazy(() => import('../components/Footer.jsx'));


const Logged = ({children}) => {
    return (
        <Suspense fallback='Cargando...'>
            <div className="flex flex-col justify-between h-screen ">
                <NavBar/>
                <div className="w-full flex justify-center bg-landscape bg-cover bg-no-repeat bg-center h-full py-8">
                    <div className="w-full max-w-[1000px] max-h-[450px]">
                        {children}
                    </div>
                </div>
                <Footer/>
            </div>
        </Suspense>
    );
}

export default Logged;