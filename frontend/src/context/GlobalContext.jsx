// dependencias
import { createContext,useState } from "react";

// crear contexto
export const GlobalContext = createContext();

const GlobalContextProvider = ({children}) => {

    // abirir y crerra modal actualizar
    const [modalState, setModalState] = useState(false);
    const openModal = () => setModalState(true);
    const closeModal = () => setModalState(false);

    // persona a actualizar
    const [updatedPerson, setUpdatedPerson] = useState({});

    return (
        <GlobalContext.Provider value={{
            openModal,
            closeModal,
            modalState,
            updatedPerson,
            setUpdatedPerson
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;
