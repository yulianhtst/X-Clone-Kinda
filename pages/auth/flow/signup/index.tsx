import ModalLayout from "@/components/layout/ModalLayout";
import SignUpPage from "@/components/pages/Auth/SignUpPage";
import { ModalContext } from "@/context/ModalContext";
import { useContext, useEffect } from "react";

export default function SignUp() {
    const { setModalState } = useContext(ModalContext)

    useEffect(() => {
        setModalState(true)
    }, [])
    
    return (
        <ModalLayout>
            <SignUpPage />
        </ModalLayout>
    )
}