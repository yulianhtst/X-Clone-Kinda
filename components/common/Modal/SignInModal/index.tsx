import { Box, Typography, TextField, styled } from "@mui/material"
import CloseButton from "../Common/CloseButton"
import ModalLayout from "@/components/layout/ModalLayout"
import { ChangeEvent, useContext, useState } from "react"
import ModalButton from "../Common/ModalButton"
import { useValidateFields } from "@/hooks/useValidateFields"
import { loginCS } from "@/services/clientSide/authServiceCS"
import { useRouter } from "next/router"
import { AuthContext } from "@/context/AuthContext"
import { useErrorManager } from "@/hooks/useErrorManager"

interface LoginForm {
    email: string,
    password: string,
}
export default function SignInModal({ handleClose }) {
    const { userAuth } = useContext(AuthContext)
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

    const onSignInClickHandler = async () => {
        try {
            const user = await loginCS(form)
            userAuth(user)
            if (user) router.replace('/explore')
        } catch (error) {
            setCustomError('loginError', 'Please enter valid credentials', error as Error)
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
        <ModalLayout>
            <Box display="flex">
                <CloseButton handleClose={handleClose} />
            </Box>
            <Box marginBottom={'20px'}>
                <Typography variant="h4" fontWeight="bold">
                    Sign In
                </Typography>
            </Box>
            <InputsWrapper>
                <TextField
                    onChange={onChangeEmailHandler}
                    error={Boolean(error.emailError)}
                    helperText={error.emailError}
                    name="email"
                    label="Email"

                />
                <TextField
                    onChange={onChangePasswordHandler}
                    error={Boolean(error.passwordError)}
                    helperText={error.passwordError}
                    name="password"
                    label="Password"
                    type="password"
                />

                {error.customErrors &&
                    <Typography>
                        {error.loginError}
                    </Typography>
                }
                <ModalButton content={'Sign In'} handler={onSignInClickHandler} />
            </InputsWrapper>
        </ModalLayout >

    )

}

const InputsWrapper = styled(Box)({
    display: "flex",
    flexDirection: "column",
    height: '100%',
    ">*": {
        width: '100%',
        margin: '10px 0'
    }
})