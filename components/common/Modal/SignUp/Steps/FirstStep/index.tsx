import { checkEmailAvailability } from "@/services/ServerSide/register"
import { Modal, Box, Typography, Button, TextField, IconButton } from "@mui/material"
import { useState, useEffect } from 'react'
import type { ChangeEvent, FocusEvent } from 'react'
import ModalButton from "../../../Common/ModalButton";
// import * as validate from '@/validation/ClientSide/validateCl'


type FirstModalStepProps = {
    formData: any;
    onClickHandler: () => void;
    updateFormValue: (name: string, value: string | boolean) => void;
};
export default function FirstModalStep({ formData, onClickHandler, updateFormValue }: FirstModalStepProps) {
    const [isEmailValid, setIsEmailValid] = useState<boolean>(false)
    const [isNameValid, setIsNameValid] = useState<boolean>(false)
    const [isEmailAvailable, setIsEmailAvailable] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')


    //onChange updates form email field
    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        updateFormValue(name, value);
    }
    //onChange updates form name field
    const onChangeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        updateFormValue(name, value);
    }
    //useEffect enable/disable button
    useEffect(() => {
        const isFormValid = Boolean((isNameValid && isEmailAvailable && isEmailValid))
        updateFormValue("isValid", isFormValid)
    }, [isEmailValid, isEmailAvailable, isNameValid])
    //useEffect checks if email is valid ormat
    useEffect(() => {
        const pattern = new RegExp("([a-zA-Z0-9]+)@([a-zA-Z]+)\\.([a-zA-Z]+)")
        const isEmailValid = pattern.test(formData.email)
        setIsEmailValid(isEmailValid)
        setMessage(isEmailValid ? "" : "Please enter a valid email.")
        if (formData.email === "") setMessage("")
    }, [formData.email])
    //useEffect checks if email already in use
    useEffect(() => {
        (async () => {
            const isEmailAvailable = await checkEmailAvailability(formData.email);

            setIsEmailAvailable(isEmailAvailable);

            if (isEmailAvailable) return;
            setMessage("Email has already been taken.");
            if (formData.email === "") setMessage("");
        })();
    }, [formData.email])
    //useEffect checks if name is empty
    useEffect(() => {
        formData.name ? setIsNameValid(true) : setIsNameValid(false)
    }, [formData.name])

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
