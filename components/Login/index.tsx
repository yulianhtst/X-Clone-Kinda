import { Box, Button, Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

import logo from "@/public/images/WhiteLogo.svg"
import Image from "next/image";



export default function LoginComponent() {
    const matches = useMediaQuery('(min-width:900px)')
    const mobile = useMediaQuery('(max-width:500px)')

    return (
        <Box
            display="flex"
            {...(matches ? { flexDirection: 'row' } : { flexDirection: 'column' })}
            // flexDirection="row"
            minHeight="100vh"
            minWidth="100vw"
            {...(matches ? { justifyContent: 'start' } : { justifyContent: 'center' })}
            sx={{
                p: mobile ? "3rem" : '4rem'
            }}
        >
            {/* {matches && */}
            <Box
                {...(matches ? { flex: "1" } : null)}
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
            >

                <Box sx={{ maxWidth: matches ? '100%' : '60px ' }}>
                    <Image src={logo} alt={"logo"} style={{ width: '100%', height: '100%' }} />
                </Box>
            </Box>
            {/* } */}
            <Box
                display="flex"
                alignItems="start"
                justifyContent="center"
                flexDirection="column"
                {...(matches ? { flex: "1" } : null)}

                sx={{
                    m: !matches ? '0 auto' : null,
                }}>

                <Box display="flex" flexDirection="column" {...(matches ? { alignItems: 'start' } : { alignItems: 'center' })}>
                    <Box sx={{ m: matches ? "48px 0" : '0px' }}>
                        <Typography fontFamily="-apple-system" variant="h2" >Happening now</Typography>
                    </Box>
                    <Box sx={{ m: "0 0 32px" }}>
                        <Typography>Join today</Typography>
                    </Box>
                    <Box display="flex" gap="8px" flexDirection="column" sx={{ width: "260px", maxWidth: '360px' }}>
                        <Button sx={{ bgcolor: 'white', borderRadius: '20px' }}>Create account</Button>
                        <Box display="flex" >
                            <Box flex="1" position="relative" sx={{ top: '50%' }} ><hr /></Box>
                            <Typography>&nbsp;or&nbsp;</Typography>
                            <Box flex="1" position="relative" sx={{ top: '50%' }}><hr /></Box>
                        </Box>
                        <Button sx={{ bgcolor: 'white', borderRadius: '20px' }}>Sign up</Button>
                        <Typography color="grey" fontSize="0.55rem">By signing up, you agree to the <span style={{ color: 'lightblue' }}>Terms of Service</span> and Privacy Policy, including <span style={{ color: 'lightblue' }}>Cookie Use</span>.</Typography>
                    </Box>
                </Box>
            </Box>
        </Box >
    );
}
