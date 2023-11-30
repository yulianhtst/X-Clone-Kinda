import { Box, Typography, TextField, Snackbar } from "@mui/material"
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ModalButton from "../../../Common/ModalButton"
import { useRef, useState } from 'react'
import { createPortal } from "react-dom"
import { verifySessionTokenCS } from "@/services/ClientSide/registerCS";

export default function FourthModalStep({ onClickHandler }: { onClickHandler: () => void }) {
    const inputRef = useRef('')
    const [open, setOpen] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null)



    const onNextClickFetch = async () => {
        const token = window.sessionStorage.getItem('SignInSession')
        
        const PIN = inputRef.current
        const res = await verifySessionTokenCS(token, PIN)
        if (!res.error) {
            onClickHandler()
        } else {
            handleClick()
            setError(res.message)
            console.log('error');
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
            <Box
                sx={{
                    mb: '20px'
                }}
            >
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
                    />, document.body
                )}
            </Box>
            <Box
                display="flex"
                flexDirection="column"
                sx={{
                    height: '100%',
                    ">*": {
                        width: '100%',
                    }
                }}
            >

                <TextField
                    onChange={(e) => inputRef.current = e.currentTarget.value}
                    label="PIN"
                    name="pin"
                    sx={{
                        margin: '10px 0'
                    }}
                />
                {/* <Button sx={{ bgcolor: 'lightblue', borderRadius: '20px', m: "auto 0 50px 0", height: '50px' }} onClick={onClickHandler}>Next </Button> */}
                <ModalButton disabled={false} content={'Next'}
                    handler={onNextClickFetch}
                />
            </Box>

        </>
    )
}