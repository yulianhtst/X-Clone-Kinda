import { Box, Typography, TextField, Snackbar } from "@mui/material"
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ModalButton from "../../../Common/ModalButton"
import { useRef, useState } from 'react'
import { createPortal } from "react-dom"
import { API } from "@/Constants"

export default function FourthModalStep({ onClickHandler }) {
    const inputRef = useRef('')
    const [open, setOpen] = useState(false);



    const onNextClickFetch = async () => {
        const token = window.sessionStorage.getItem('SignInSession')
        const options = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                "Content-Type": "application/json",
                "Action": "Verify-PIN"
            },
            body: JSON.stringify({ PIN: inputRef.current })
            // body: JSON.stringify({ PIN: 174000 })
        }

        const res = await fetch(`${API}/verify/verifypin`, options)
        const resJSON = await res.json()
        if (!resJSON.error) {
            onClickHandler()

        } else {
            handleClick()
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
                            <Typography>Pin don't match</Typography>
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
                    ref={inputRef}
                    onChange={(e) => inputRef.current = e.target.value}
                    label="PIN"
                    name="pin"
                    sx={{
                        margin: '10px 0'
                    }}
                />
                {/* <Button sx={{ bgcolor: 'lightblue', borderRadius: '20px', m: "auto 0 50px 0", height: '50px' }} onClick={onClickHandler}>Next </Button> */}
                <ModalButton isDisabled={false} content={'Next'} onClickHandler={() => {
                    onNextClickFetch()
                }} />
            </Box>

        </>
    )
}