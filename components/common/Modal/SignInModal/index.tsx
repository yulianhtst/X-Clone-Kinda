import { Box, Typography, TextField } from "@mui/material"
import CloseButton from "../Common/CloseButton"
import ModalLayout from "@/components/layout/ModalLayout"
import { ChangeEvent, useContext, useEffect, useState } from "react"
import ModalButton from "../Common/ModalButton"
import { useValidateFields } from "@/hooks/useValidateFields"
import { loginCS } from "@/services/ClientSide/authServiceCS"
import { useRouter } from "next/router"
import { AuthContext } from "@/context/AuthContext"
import { useErrorManager } from "@/hooks/useErrorManager"

interface LoginForm {
    email: string,
    password: string,
}
export default function SignInModal({ handleClose }) {
    const { auth, userAuth } = useContext(AuthContext)
    const router = useRouter()


    const [form, setForm] = useState<LoginForm>({
        email: '',
        password: '',
    })
    
    const { error, setCustomError } = useErrorManager()
    const { validateEmail } = useValidateFields(setCustomError)

    const { email } = form

    validateEmail(email)

    const updateFormValue = (name: string, value: string | boolean) => {
        setForm(state => ({ ...state, [name]: value }));
    };
    const onClickHandler = async () => {
        try {
            const user = await loginCS(form)
            userAuth(user)
            if (user) router.replace('/explore')
        } catch (e) {
            // // setCustomError('loginError', 'Please enter valid credentials', e)
        }
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
            <ModalLayout>
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
                    {error.customErrors &&
                        <Typography>
                            {error.loginError}
                        </Typography>
                    }
                    <ModalButton content={'Sign In'} handler={onClickHandler} />
                </Box>
            </ModalLayout >

        </>
    )
}