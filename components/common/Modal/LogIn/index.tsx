import { Box, Typography, TextField } from "@mui/material"
import CloseButton from "../Common/CloseButton"
import ModalLayout from "@/components/layout/ModalLayout"
import { ChangeEvent, useContext, useState } from "react"
import ModalButton from "../Common/ModalButton"
import { useValidateFields } from "@/hooks/useValidateFields"
import { loginCS } from "@/services/ClientSide/authServiceCS"
import { useRouter } from "next/router"
import { AuthContext } from "@/context/AuthContext"

interface LoginForm {
    email: string,
    password: string,
}
export default function Login({ handleClose }) {
    const { auth, userAuth } = useContext(AuthContext)
    const router = useRouter()

    const [form, setForm] = useState<LoginForm>({
        email: '',
        password: '',
    })
    const { validateEmail, validatePassword, error } = useValidateFields()

    const { email, password } = form
    validateEmail(email)
    // validatePassword(password)

    const updateFormValue = (name: string, value: string | boolean) => {
        setForm(state => ({ ...state, [name]: value }));
    };
    const onClickHandler = async () => {
        const user = await loginCS(email, password)
        userAuth(user)
        if (user) router.replace('/explore')
    }
    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        updateFormValue(name, value);
    }
    const onChangePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        updateFormValue(name, value);
    }


    return (
        <>
            <Box display="flex">
                <CloseButton handleClose={handleClose} />
                <Typography
                    variant="h6"
                    fontWeight="bold"
                    alignSelf="center"
                    sx={{
                        ml: '15px'
                    }}
                ></Typography>
            </Box>
            <ModalLayout>

                <Box
                    sx={{
                        mb: '20px'
                    }}
                >
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                    >
                        Sign In
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
                        onChange={onChangeEmailHandler}
                        error={Boolean(error.emailError)}
                        helperText={error.emailError}
                        name="email"
                        label="Email"
                        sx={{
                            margin: '10px 0'
                        }} />
                    <TextField
                        onChange={onChangePasswordHandler}
                        error={Boolean(error.passwordError)}
                        helperText={error.passwordError}
                        name="password"
                        label="Password"
                        type="password"
                        sx={{
                            margin: '10px 0'
                        }} />
                    <ModalButton content={'Sign Up'} handler={onClickHandler} />
                </Box>
            </ModalLayout>

        </>
    )
}