import { Box, Typography, TextField } from "@mui/material"
import type { ChangeEvent } from 'react'
import { useContext, useState } from 'react'
import ModalButton from "../../../Common/ModalButton"
import { API } from "@/Constants"
import { useRouter } from "next/router"
import { AuthContext } from "@/context/AuthContext"
import { connectDb } from "@/dbConfig/dbConfig"
import { useValidateFields } from "@/hooks/useValidateFields"
type FifthModalStepProps = {
    formData: any,
    updateFormValue: (name: string, value: string | boolean) => void,
    onClickHandler: () => void
}


export default function FifthModalStep({ formData, updateFormValue, onClickHandler }: FifthModalStepProps) {

    const { auth, userAuth } = useContext<any>(AuthContext)
    const router = useRouter()
    const { error, validatePassword } = useValidateFields()

    const { password } = formData
    validatePassword(password)


    const onSubmitFormHandler = async () => {
        const createdUser = await fetch(`${API}/auth/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        const currentUser = await createdUser.json()

        console.log(currentUser, 'user');
        userAuth(currentUser)
        if (createdUser) router.replace('/explore')
    }

    const onPasswordChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target

        updateFormValue(name, value)
    }
    // const onPasswordChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = e.target
    //     if (value.length < 5) {
    //         setError('The password is too short')
    //     } else {
    //         setError('')
    //         updateFormValue(name, value)
    //     }
    // }
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
                    helperText={error.passwordError}
                    error={Boolean(error.passwordError)}
                    onChange={onPasswordChangeHandler}
                    label="Password"
                    name="password"
                    type="password"
                    sx={{
                        margin: '10px 0'
                    }}
                />
                <ModalButton disabled={Boolean(error.passwordError)} content={'submit'}
                    handler={() => {
                        onSubmitFormHandler()
                        onClickHandler()
                    }} />
            </Box>
        </>
    )
}