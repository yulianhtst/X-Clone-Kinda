import { Modal, Box, Typography, Button, TextField, IconButton } from "@mui/material"
import { useState } from "react"
import SingUp from "./SignUp"

interface IModalProps {
    isOpen: boolean
    handleClose: () => void
}


export default function ModalComponent({ isOpen, handleClose }: IModalProps) {

    //Prop Drilling NEED TO BE FIXED

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

                <SingUp handleClose={handleClose} />

            </Box>
        </Modal >
    )
}