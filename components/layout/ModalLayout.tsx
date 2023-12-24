import { Box, Modal } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface IModalProps {
    isOpen: boolean
    button: string | null
    handleClose: () => void
}


export default function ModalLayout({ children }: { children: any }) {
    const [isOpen, setIsOpen] = useState<boolean>(true)
    const [button, setButton] = useState<string | null>(null)

    const router = useRouter()

    const onModalClose = () => {
        // router.push('/')
        router.back()
        // window.history.go(-1)
        setIsOpen(false);
    };

    return (
        <Modal
            open={isOpen}
            onClose={onModalClose}
        >
            <Box
                display="flex"
                flexDirection="column"
                position="absolute"
                sx={{
                    width: '600px',
                    height: '550px',
                    p: '0 80px ',
                    mt: '40px',
                    bgcolor: 'white',
                    border: '2px solid #000',
                    borderRadius: '5%',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)',
                    color: 'black',
                }}
            >

                <Box

                >
                    {children}
                </Box>
            </Box>
        </Modal >
    );
}
