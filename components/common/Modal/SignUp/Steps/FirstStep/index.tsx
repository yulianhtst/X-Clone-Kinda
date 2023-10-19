import { Modal, Box, Typography, Button, TextField, IconButton } from "@mui/material"
import { useState } from 'react'

export default function FirstModalStep({ onClickHandler, onBlurHandler, isEmailFree }: { onClickHandler: () => void, onBlurHandler: () => void, isEmailFree: boolean }) {
    const [isEmailValid, setIsEmailValid] = useState(true)
    let message = null


    message = isEmailFree ? '' : 'Email taken'
    message = isEmailValid ? '' : "Please enter a valid email"
    return (<>

        <Box
            sx={{
                mb: '20px'
            }}
        >
            <Typography
                variant="h4"
                fontWeight="bold"
            >
                Create your account
            </Typography>
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
                onBlur={onBlurHandler}
                name="name"
                label="Name"
                sx={{
                    margin: '10px 0'
                }} />
            <TextField
                onBlur={onBlurHandler}
                error={!isEmailFree}
                helperText={message}

                name="email"
                label="Email"
                sx={{
                    margin: '10px 0'
                }} />
            <Button sx={{ bgcolor: 'lightblue', borderRadius: '20px', m: "auto 0 50px 0", height: '50px' }} onClick={onClickHandler}>Next </Button>
        </Box>
    </>
    )
}
