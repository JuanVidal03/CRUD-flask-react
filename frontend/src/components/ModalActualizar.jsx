// dependecias
import { useContext, useEffect, useState } from "react";
// contexto
import { GlobalContext } from "../context/GlobalContext";
// iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
// servicio de la api
import { actualizarPersona } from "../services/apiActions.js";



const ModalActualizar = ({personaActualizar}) => {

    // contexto
    const context = useContext(GlobalContext);

    // nuevos valores
    const [nombre, setNombre] = useState('');
    const [mail, setMail] = useState('');
    const [telefono, setTelefono] = useState('');

    // actualizar persona
    const [acttualizarPersonaState, setActtualizarPersonaState] = useState(false);

    const actualizarPersonaFn = () => {
        setActtualizarPersonaState(true);
        context.closeModal();
    }

     // actualizar persona
     useEffect(() => {
        const updatePerson = async() => {
            try {
                const cedulaContext = context.updatedPerson.cedula;
                const nombreContext = context.updatedPerson.nombre;
                const mailContext = context.updatedPerson.mail;
                const telefonoContext = context.updatedPerson.telefono;

                const nuevaPersona = {
                    cedula: cedulaContext,
                    nombre: nombre == '' ? nombreContext : nombre,
                    mail: mail == '' ? mailContext : mail,
                    telefono: telefono == '' ? telefonoContext : telefono 
                }
                console.log(nuevaPersona)
                const data = await actualizarPersona(cedulaContext, nuevaPersona)
                console.log(data);
            } catch (error) {
                console.log(error)
            }
        }
        
        acttualizarPersonaState && updatePerson();
        
    }, [acttualizarPersonaState]);

    return (
        <div className='w-screen h-screen bg-[#0000008b] backdrop-blur-sm absolute top-0 left-0'>
            <div className="relative flex justify-center items-center w-full h-full">
                <div className="bg-white relative w-[500px] h-[500px] rounded-lg">
                    <div className="w-full h-full flex flex-col gap-4 p-8 justify-center items-center">
                        <h4 className="text-2xl uppercase font-bold mb-8">Actualizar Persona!</h4>
                        <input onChange={(e) => setNombre(e.target.value) } className="w-full bg-[#f2f2f2] p-2 transition-all focus:outline-none focus:bg-blue-500 focus:text-white rounded-lg" type="text" placeholder={personaActualizar.nombre}/>
                        <input onChange={(e) => setMail(e.target.value) } className="w-full bg-[#f2f2f2] p-2 transition-all focus:outline-none focus:bg-blue-500 focus:text-white rounded-lg" type="text" placeholder={personaActualizar.mail}/>
                        <input onChange={(e) => setTelefono(e.target.value) } className="w-full bg-[#f2f2f2] p-2 transition-all focus:outline-none focus:bg-blue-500 focus:text-white rounded-lg" type="text" placeholder={personaActualizar.telefono}/>
                        <button onClick={actualizarPersonaFn} className="bg-black mt-8 text-white uppercase py-3 px-8 font-bold">Actualizar</button>
                    </div>
                    <FontAwesomeIcon onClick={() => context.closeModal()} className="text-black absolute text-2xl cursor-pointer right-4 top-4" icon={faCircleXmark} />
                </div>
            </div>
        </div>
    );
}

export default ModalActualizar;
