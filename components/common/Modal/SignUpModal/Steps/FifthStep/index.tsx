import { Box, Typography, TextField } from "@mui/material"
import type { ChangeEvent } from 'react'
import { useContext, useState } from 'react'
import ModalButton from "../../../Common/ModalButton"
import { API } from "@/Constants"
import { useRouter } from "next/router"
import { AuthContext } from "@/context/AuthContext"
import { connectDb } from "@/dbConfig/dbConfig"
import { useValidateFields } from "@/hooks/useValidateFields"
import { createUserCS } from "@/services/ClientSide/registerCS"
import { useErrorManager } from "@/hooks/useErrorManager"
type FifthModalStepProps = {
    formData: any,
    updateFormValue: (name: string, value: string | boolean) => void,
    onClickHandler: () => void
}


export default function FifthModalStep({ formData, updateFormValue, onClickHandler }: FifthModalStepProps) {

    const { auth, userAuth } = useContext<any>(AuthContext)
    const router = useRouter()
    const { error, setCustomError } = useErrorManager()
    const { validatePassword } = useValidateFields(setCustomError)

    const { password } = formData
    validatePassword(password)


    const onSubmitFormHandler = async () => {
        const createdUser = await createUserCS(formData)

        userAuth(createdUser)
        if (createdUser) router.replace('/explore')
    }

    const onPasswordChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.currentTarget

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
                    }}
                />
            </Box>
        </>
    )
}