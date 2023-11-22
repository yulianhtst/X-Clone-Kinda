import { checkEmailAvailability } from "@/services/ServerSide/register"
import { Modal, Box, Typography, Button, TextField, IconButton } from "@mui/material"
import { useState, useEffect } from 'react'
import type { ChangeEvent, FocusEvent } from 'react'
import ModalButton from "../../../Common/ModalButton";
import { useValidateFields } from "@/hooks/useValidateFields";
// import * as validate from '@/validation/ClientSide/validateCl'


type FirstModalStepProps = {
    formData: any;
    onClickHandler: () => void;
    updateFormValue: (name: string, value: string | boolean) => void;
};
export default function FirstModalStep({ formData, onClickHandler, updateFormValue }: FirstModalStepProps) {
    const {
        isEmailValid,
        isNameValid,
        isEmailAvailable,
        message,
    } = useValidateFields(formData)

    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        updateFormValue(name, value);
    }
    const onChangeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        updateFormValue(name, value);
    }
    useEffect(() => {
        const isFormValid = Boolean((isNameValid && isEmailAvailable && isEmailValid))
        updateFormValue("isValid", isFormValid)
    }, [isEmailValid, isEmailAvailable, isNameValid])


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
                    onChange={onChangeNameHandler}
                    value={formData.name}
                    name="name"
                    label="Name"
                    sx={{
                        margin: '10px 0'
                    }} />
                <TextField
                    onChange={onChangeEmailHandler}
                    value={formData.email}
                    error={Boolean(message)}
                    helperText={message}

                    name="email"
                    label="Email"
                    sx={{
                        margin: '10px 0'
                    }} />
                <ModalButton content={'Next'} disabled={!formData.isValid} handler={onClickHandler} />
            </Box>
        </>
    )
}
