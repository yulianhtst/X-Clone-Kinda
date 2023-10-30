import { Box, Typography, TextField } from "@mui/material"
import type { ChangeEvent } from 'react'
import { useState } from 'react'
import ModalButton from "../../../Common/ModalButton"
import { API } from "@/Constants"
import { useRouter } from "next/router"
type FifthModalStepProps = {
    formData: any,
    updateFormValue: (name: string, value: string | boolean) => void,
    onClickHandler: () => void
}

export default function FifthModalStep({ formData, updateFormValue, onClickHandler }: FifthModalStepProps) {
    const [error, setError] = useState('')
    const router = useRouter()

    const onSubmitFormHandler = async () => {
        const createdUser = await fetch(`${API}/auth/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        if (createdUser) router.replace('/about')

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
                <ModalButton disabled={Boolean(error)} content={'submit'}
                    handler={() => {
                        onSubmitFormHandler()
                        onClickHandler()
                    }} />
            </Box>
        </>
    )
}