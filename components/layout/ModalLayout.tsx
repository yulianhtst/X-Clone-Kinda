import { Box, Modal, styled } from '@mui/material';
import { useRouter } from 'next/router';
import {  useState } from 'react';




export default function ModalLayout({ children }: { children: any }) {
    const [isOpen, setIsOpen] = useState<boolean>(true)

    const router = useRouter()

    const onModalClose = () => {
        router.back()
        setIsOpen(false);
    };

    return (
        <Modal
            open={isOpen}
            onClose={onModalClose}
        >
                <ModalBody>
                    {children}
                </ModalBody>
        </Modal >
    );
}

const ModalBody = styled(Box)({
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    width: '600px',
    height: '550px',
    padding: '0 80px ',
    backgroundColor: 'white',
    border: '2px solid #000',
    borderRadius: '5%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    color: 'black',
})