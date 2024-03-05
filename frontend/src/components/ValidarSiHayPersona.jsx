// dependecias
import { Link } from "react-router-dom";

const ValidarSiHayPersona = () => {
    return (
        <div className="bg-[#ffffff84] backdrop-blur-sm rounded-2xl w-full h-full flex flex-col gap-8 justify-center items-center">
            <h2 className="text-2xl font-bold uppercase ">No hay personas registradas actualmente!</h2>
            <Link to='/agregar-persona' className="bg-black text-white transition-all py-3 px-8 uppercase font-bold hover:scale-95">Agregar Persona</Link>
        </div>
    );
}

export default ValidarSiHayPersona;