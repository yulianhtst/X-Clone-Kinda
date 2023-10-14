import { Modal, Box, Typography, Button, TextField, IconButton } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';

import { useState } from 'react'
import ModalLayout from "@/components/layout/ModalLayout";

import FirstModalPage from "./FirstPage";
import SecondModalPage from "./SecondPage";

export default function SingUp() {
    const [step, setStep] = useState(1)

    const onNextBtnClickHandler = () => {
        setStep(step + 1)
    }
    return (
        <>
            <Box
                display="flex"
            >
                <IconButton>
                    <CloseIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    fontWeight="bold"
                    alignSelf="center"
                    sx={{
                        ml: '15px'
                    }}
                >
                    Step {step} of 5
                </Typography>
            </Box>


            {/* ////////////////////////////////////////////////////////////////// */}
            <ModalLayout>

                {
                    step === 1 && <FirstModalPage onClickHandler={onNextBtnClickHandler} />
                }
                {
                    step === 2 && <SecondModalPage />
                }


            </ModalLayout >
        </>
    )
}