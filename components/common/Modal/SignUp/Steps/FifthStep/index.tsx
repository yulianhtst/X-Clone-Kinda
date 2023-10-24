import { Box, Typography, TextField } from "@mui/material"
import type { ChangeEvent } from 'react'
import { useState } from 'react'
import ModalButton from "../../../Common/ModalButton"
import { API } from "@/Constants"
export default function FifthModalStep({ formData, updateFormValue, onClickHandler }: { formData: any, updateFormValue: (name: string, value: string) => void, onClickHandler: () => void }) {
    const [error, setError] = useState('')
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
        if (value.length < 5) {
            setError('The password is too short')
        } else {
            setError('')
            updateFormValue(name, value)
        }
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
                    helperText={error}
                    error={Boolean(error)}
                    onChange={onPasswordChangeHandler}
                    label="Password"
                    name="password"
                    type="password"
                    sx={{
                        margin: '10px 0'
                    }}
                />
                <ModalButton isDisabled={Boolean(error)} content={'submit'} onClickHandler={() => {
                    onSubmitFormHandler()
                    onClickHandler()
                }} />
            </Box>
        </>
    )
}