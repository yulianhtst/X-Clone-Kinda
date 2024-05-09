import { Box, Typography, TextField } from "@mui/material"
import type { ChangeEvent } from 'react'
import { useContext, useState } from 'react'
import ModalButton from "../../../Common/ModalButton"
import { useRouter } from "next/router"
import { AuthContext } from "@/context/AuthContext"
import { useValidateFields } from "@/hooks/useValidateFields"
import { createUserCS } from "@/services/clientSide/registerCS"
import { useErrorManager } from "@/hooks/useErrorManager"
import { styled } from "@mui/system"


type FifthModalStepProps = {
    formData: any,
    updateFormValue: (name: string, value: string | boolean) => void,
    onClickHandler: () => void
}


export default function FifthModalStep({ formData, updateFormValue, onClickHandler }: FifthModalStepProps) {

    const router = useRouter()

    const { userAuth } = useContext<any>(AuthContext)
    const { error, setCustomError } = useErrorManager()
    const { validatePassword } = useValidateFields(setCustomError)

    const { password } = formData
    validatePassword(password)


    const onSubmitFormHandler = async () => {
        try {
            const createdUser = await createUserCS(formData)

            userAuth(createdUser)
            if (createdUser) router.replace('/explore')
        } catch (error: any) {
            setCustomError("createUserError", error.message, error)
        }
    }

    const onPasswordChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget

        updateFormValue(name, value)
    }

    return (
        <>
            <Box marginBottom={"20px"} >
                <Typography
                    variant="h4"
                    fontWeight="bold"
                >
                    Choose password
                </Typography>
            </Box>
            <InputContainer>

                <TextField
                    helperText={error.passwordError}
                    error={Boolean(error.passwordError)}
                    onChange={onPasswordChangeHandler}
                    label="Password"
                    name="password"
                    type="password"
                    sx={{ margin: '10px 0' }}
                />
                <ModalButton disabled={Boolean(error.passwordError)} content={'submit'}
                    handler={() => {
                        onSubmitFormHandler()
                        onClickHandler()
                    }}
                />
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