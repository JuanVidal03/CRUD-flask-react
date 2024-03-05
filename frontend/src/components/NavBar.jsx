// dependencias
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header className="bg-dark-color shadow-dark-bottom-shadow p-6">
            <nav>
                <ul className="w-full flex justify-center items-center gap-10">
                    <li className="text-white uppercase font-bold transition-all hover:text-blue-500"><Link to='/agregar-persona'>Agregar Personas</Link></li>
                    <li className="text-white uppercase font-bold transition-all hover:text-blue-500"><Link to='/personas-registradas'>Personas Registradas</Link></li>
                </ul> 
            </nav>
        </header>
    );
}

export default NavBar;