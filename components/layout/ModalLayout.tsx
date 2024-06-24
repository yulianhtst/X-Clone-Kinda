import { ModalContext } from '@/context/ModalContext';
import { Box, Modal, styled } from '@mui/material';
import { useRouter } from 'next/router';
import { useContext} from 'react';





export default function ModalLayout({ children }: { children: any }) {
    const { state, setModalState } = useContext(ModalContext)
    const router = useRouter()
    
    return (
        <Modal
            open={state.modalState}
            onClose={() => {
                router.push('/')
                setModalState(false)
            }}
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