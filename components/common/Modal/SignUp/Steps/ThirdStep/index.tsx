import { Modal, Box, Typography, Button, TextField, IconButton } from "@mui/material"
import ModalButton from "../../Common/ModalButton"
import { API } from "@/Constants"
import { useState } from 'react'

export default function ThirdModalStep({ onClickHandler, formData }) {
    const [temporaryForm, setTemporaryForm] = useState({})

    // const name;
    // const email;


    const onNextClickFetch = async () => {
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Action": "Send-Email"
            },
            body: JSON.stringify(temporaryForm)
        }

        const res = await fetch(API + "mailer", options)
        const { sessionToken } = await res.json()
        window.sessionStorage.setItem('SignInSession', sessionToken)
    }


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
                    onChange={(e) => setTemporaryForm(state => ({ ...state, name: e.target.value }))}
                    value={formData.name}
                    disabled
                    onClick={() => console.log('clicked')}
                    label="Name"
                    name="name"
                    sx={{
                        margin: '10px 0'
                    }}
                />
                <TextField
                    onChange={(e) => setTemporaryForm(state => ({ ...state, email: e.target.value }))}
                    value={formData.email}
                    disabled
                    label="Email"
                    name="email"
                    sx={{
                        margin: '10px 0'
                    }}
                />
                {/* <Button sx={{ bgcolor: 'lightblue', borderRadius: '20px', m: "auto 0 50px 0", height: '50px' }} onClick={onClickHandler}>Next </Button> */}
                <ModalButton onClickHandler={() => {
                    onNextClickFetch()
                    onClickHandler()
                }} />
            </Box>
        </>
    )
}