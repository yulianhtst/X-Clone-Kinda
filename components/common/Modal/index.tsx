import { Modal, Box } from "@mui/material"
import SingUp from "./SignUp"
import Login from "./Login"

interface IModalProps {
    isOpen: boolean
    button: string | null
    handleClose: () => void
}


export default function ModalComponent({ isOpen, handleClose, button }: IModalProps) {


    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
        >
            <Box
                position="absolute"
                display="flex"
                flexDirection="column"
                sx={{
                    width: '600px',
                    height: '550px',
                    bgcolor: 'white',
                    border: '2px solid #000',
                    borderRadius: '5%',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)',
                    color: 'black',
                    p: '10px'
                }}>
                {button === 'Sign up' &&
                    <Login handleClose={handleClose} />
                }
                {button === 'Create account' &&
                    <SingUp handleClose={handleClose} />
                }

            </Box>
        </Modal >
    )
}