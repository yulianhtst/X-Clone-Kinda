import { Box, Typography, TextField, Snackbar, styled } from "@mui/material"
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ModalButton from "../../../Common/ModalButton"
import { useRef, useState } from 'react'
import { createPortal } from "react-dom"
import { verifySessionTokenCS } from "@/services/clientSide/registerCS";
import axios from "axios";

export default function FourthModalStep({ onNextBtnClickHandler }: { onNextBtnClickHandler: () => void }) {
    const inputRef = useRef('')
    const [open, setOpen] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null)



    const onNextClickFetch = async () => {
        const token = window.sessionStorage.getItem('SignInSession')

        const PIN = inputRef.current
        try {
            await verifySessionTokenCS(token, PIN)
        } catch (error) {
            if (!axios.isAxiosError(error)) {
                onNextBtnClickHandler()
            } else {
                handleClick()
                setError(error.message)
            }

        }
    }
    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
            <Box marginBottom={"20px"}  >
                <Typography
                    variant="h4"
                    fontWeight="bold"
                >
                    Enter your PIN
                </Typography>
                {createPortal(
                    <Snackbar
                        role="alert"
                        open={open}
                        onClose={handleClose}
                        autoHideDuration={5000}
                        message={
                            <Typography>{error}</Typography>
                        }
                        action={<HighlightOffIcon sx={{ color: 'rgb(247, 84, 62)' }} />}
                        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
                    />,
                    document.body
                )}
            </Box>
            <InputContainer>
                <TextField
                    onChange={(e) => inputRef.current = e.currentTarget.value}
                    label="PIN"
                    name="pin"
                />
                <ModalButton disabled={false} content={'Next'} handler={onNextClickFetch} />
            </InputContainer>
        </>
    )
}
const InputContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    height: '100%',
    ">*": {
        width: '100%',

    }
})