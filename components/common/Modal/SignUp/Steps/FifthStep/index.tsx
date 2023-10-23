import { Modal, Box, Typography, Button, TextField, IconButton } from "@mui/material"
import type { ChangeEvent } from 'react'
import ModalButton from "../../../Common/ModalButton"
import { API } from "@/Constants"

export default function FifthModalStep({ formData, updateFormValue }: { formData: any, updateFormValue: (name: string, value: string) => void }) {

    const onSubmitFormHandler = async () => {
        const createUser = await fetch(`${API}/auth/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
    }

    const onPasswordChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        updateFormValue(name, value)
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
                    Choose password
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
                    onChange={onPasswordChangeHandler}
                    label="Password"
                    name="password"
                    type="password"
                    sx={{
                        margin: '10px 0'
                    }}
                />
                <ModalButton content={'submit'} onClickHandler={onSubmitFormHandler} />
            </Box>
        </>
    )
}