import { useState } from "react";
import { ModalContext } from "./ModalContext"

export const ModalContextProvider = ({ children }: any) => {
    const [state, setState] = useState(false);

    const setModalState = (state: boolean) => {
        setState(state)
    }


    return (
        <ModalContext.Provider value={{ state , setModalState }}>
            {children}
        </ModalContext.Provider>
    )
}