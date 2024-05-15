import ModalLayout from "@/components/layout/ModalLayout";
import SignInPage from "@/components/pages/Auth/SignInPage";
import { ModalContext } from "@/context/ModalContext";
import { useContext, useEffect } from "react";

export default function SignIn() {
    const { setModalState } = useContext(ModalContext)

    useEffect(() => {
        setModalState(true)
    }, [])

    return (
        <ModalLayout>
            <SignInPage />
        </ModalLayout>
    )
}