import { checkEmailAvailability } from "@/services/register"
import { Modal, Box, Typography, Button, TextField, IconButton } from "@mui/material"
import { useState, useEffect } from 'react'
import type { ChangeEvent, FocusEvent } from 'react'

export default function FirstModalStep({ onClickHandler, updateFormValue }: { onClickHandler: () => void, updateFormValue: (name: string, value: string) => void, }) {
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [isNameValide, setIsNameValid] = useState(false)
    const [isEmailAvailable, setIsEmailAvailable] = useState(false)
    const [ButtonState, setButtonState] = useState(false)
    const [message, setMessage] = useState('')

    //Here will be good option to be added Debounceing and be changed to onChange event
    const onBlurEmailHandler = async (e: FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const isEmailAvailable = await checkEmailAvailability(value);

        setIsEmailAvailable(isEmailAvailable)
        updateFormValue(name, value);

        if (isEmailAvailable) return
        setMessage(isEmailAvailable ? "" : "Email has already been taken.")
        if (value === "") setMessage("")

    }
    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        const pattern = new RegExp("([a-zA-Z0-9]+)@([a-zA-Z]+)\\.([a-zA-Z]+)")
        const isEmailValid = pattern.test(value)

        setIsEmailValid(isEmailValid)
        updateFormValue(name, value);
        setMessage(isEmailValid ? "" : "Please enter a valid email.")
        if (value === "") setMessage("")
    }
    const onChangeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        value ? setIsNameValid(true) : setIsNameValid(false)
        updateFormValue(name, value);
    }
    useEffect(() => {

    }, [isEmailValid, isEmailAvailable])



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
                onChange={onChangeNameHandler}
                name="name"
                label="Name"
                sx={{
                    margin: '10px 0'
                }} />
            <TextField
                onBlur={onBlurEmailHandler}
                onChange={onChangeEmailHandler}
                error={!isEmailAvailable}
                helperText={message}

                name="email"
                label="Email"
                sx={{
                    margin: '10px 0'
                }} />
            <Button disabled={ButtonState} sx={{ bgcolor: 'lightblue', borderRadius: '20px', m: "auto 0 50px 0", height: '50px' }} onClick={onClickHandler}>Next </Button>
        </Box>
    </>
    )
}
