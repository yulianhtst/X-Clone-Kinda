import { Box, Button, Typography, styled } from "@mui/material";


import logo from "@/public/svgs/WhiteLogo.svg"
import Image from "next/image";

import { useRouter } from "next/router";

export default function LandingComponent() {
    const router = useRouter()

    const onSignUpClick = () => {
        router.push('/auth/signup')
    };
    const onSignInClick = () => {
        router.push('/auth/signin')
    };


    return (
        <Box display={"flex"} width={'100vw'} height={'100vh'}>
            <ContentWrapper sx={{ minWidth: '45vw' }}>
                <Image src={logo} alt={"logo"} />
            </ContentWrapper>
            <ContentWrapper flex={1}>
                <Box>
                    <Box>
                        <Typography variant="h2">
                            Everything start from here
                        </Typography>
                    </Box>
                    <Box>
                        <Typography>
                            Join today
                        </Typography>
                    </Box>
                    <AuthBox >
                        <AuthButton onClick={onSignUpClick}>
                            Create account
                        </AuthButton>

                        <Box display="flex" >
                            <Line />
                            <Typography>&nbsp;or&nbsp;</Typography>
                            <Line />
                        </Box>

                        <AuthButton onClick={onSignInClick} >
                            Login to account
                        </AuthButton>
                        <TermsAndConditions />
                    </AuthBox>
                </Box>
            </ContentWrapper>
        </Box >
    )
}



const TermsAndConditions = () => (
    <Typography
        color="#808080"
        fontSize="0.55rem"
    >
        By signing up, you agree to the
        <span style={{ color: 'lightblue' }}>Terms of Service</span>
        and Privacy Policy, including
        <span style={{ color: 'lightblue' }}>Cookie Use</span>.
    </Typography>
)
const Line = () => (
    <Box
        display="flex"
        flex={1}
        alignItems='center'
    >
        <Box display="flex"
            sx={{
                height: "1px",
                backgroundColor: 'white',
                width: '100%'
            }}
        ></Box>
    </Box >
)


const AuthButton = styled(Button)({
    backgroundColor: 'white',
    borderRadius: '20px',
})
const ContentWrapper = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
})

const AuthBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    maxWidth: '300px'
})
