import { Box, Button, Modal, Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

import ModalComponent from "../common/Modal";

import logo from "@/public/images/WhiteLogo.svg"
import Image from "next/image";

import { useRef, useState } from 'react'

export default function LoginComponent() {
    const [isOpen, setIsOpen] = useState(false)
    const [button, setButton] = useState(null)

    const matches900 = useMediaQuery('(min-width:900px)')
    const matches500 = useMediaQuery('(max-width:500px)')

    const onModalOpen = (e: any) => {
        const clicked = e.currentTarget.textContent
        console.log(clicked);
        
        setButton(clicked)
        setIsOpen(true);
    };

    const onModalClose = () => {
        setIsOpen(false);
    };
    return (
        <>
            {isOpen &&
                <ModalComponent isOpen={isOpen} handleClose={onModalClose} button={button} />
            }


            <Box
                display="flex"
                {...(matches900 ? { flexDirection: 'row' } : { flexDirection: 'column' })}
                {...(matches900 ? { justifyContent: 'start' } : { justifyContent: 'center' })}
                sx={{
                    minHeight: "100vh",
                    minWidth: "100vw",
                    p: matches500 ? "3rem" : '4rem'
                }}
            >
                {/* {matches900 && */}
                <Box
                    {...(matches900 ? { flex: "1" } : null)}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                >

                    <Box
                        sx={{
                            maxWidth: matches900 ? '100%' : '60px '
                        }}>
                        <Image
                            src={logo}
                            alt={"logo"}
                            style={{
                                width: '100%',
                                height: '100%'
                            }} />
                    </Box>
                </Box>
                <Box
                    {...(matches900 ? { flex: "1" } : null)}
                    {...(matches900 ? { alignItems: 'start' } : { alignItems: 'center' })}
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                >

                    <Box
                        {...(matches900 ? { alignItems: 'start' } : { alignItems: 'center' })}
                        display="flex"
                        flexDirection="column"
                    >
                        <Box
                            sx={{
                                m: matches900 ? "48px 0" : '0px'
                            }}
                        >

                            <Typography
                                fontFamily="-apple-system"
                                variant="h2"
                            >
                                Happening now
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                m: "0 0 32px"
                            }}>
                            <Typography>
                                Join today
                            </Typography>
                        </Box>
                        <Box
                            display="flex"
                            gap="8px"
                            flexDirection="column"
                            sx={{
                                width: "260px",
                                maxWidth: '360px'
                            }}
                        >
                            <Button
                                onClick={onModalOpen}
                                sx={{
                                    bgcolor: 'white',
                                    borderRadius: '20px'
                                }}
                            >
                                Create account
                            </Button>

                            <Box display="flex" >
                                <Box
                                    flex="1"
                                    position="relative"
                                    sx={{
                                        top: '50%'
                                    }}
                                >
                                    <hr />
                                </Box>
                                <Typography>&nbsp;or&nbsp;</Typography>
                                <Box
                                    flex="1"
                                    position="relative"
                                    sx={{
                                        top: '50%'
                                    }}
                                >
                                    <hr />
                                </Box>
                            </Box>
                            <Button
                                onClick={onModalOpen}
                                sx={{
                                    bgcolor: 'white',
                                    borderRadius: '20px'
                                }}
                            >
                                Sign up
                            </Button>
                            <Typography
                                color="#808080"
                                fontSize="0.55rem"
                            >
                                By signing up, you agree to the
                                <span style={{ color: 'lightblue' }}>Terms of Service</span>
                                and Privacy Policy, including
                                <span style={{ color: 'lightblue' }}>Cookie Use</span>.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box >
        </>
    );
}
