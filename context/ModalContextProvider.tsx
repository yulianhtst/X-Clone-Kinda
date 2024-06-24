import { useState } from "react";
import { ModalContext } from "./ModalContext";

export const ModalContextProvider = ({ children }: any) => {
  const [state, setState] = useState<any>({
    modalState: false,
    modalContent: "",
  });

  const setModalState = (modalState , modalContent = null) => {
    setState((oldState) => ({ ...oldState, modalState, modalContent }));
  };

  return (
    <ModalContext.Provider value={{ state, setModalState }}>
      {children}
    </ModalContext.Provider>
  );
};
