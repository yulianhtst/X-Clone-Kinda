import { Modal, Box, Typography, Button, TextField, IconButton } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { useEffect, useState } from 'react'
import ModalLayout from "@/components/layout/ModalLayout";

import FirstModalStep from "./Steps/FirstStep";
import SecondModalStep from "./Steps/SecondStep";
import ThirdModalStep from "./Steps/ThirdStep";
import FourthModalStep from "./Steps/FourthStep";
import FifthModalStep from "./Steps/FifthStep";
import { checkEmailAvailability } from "@/services/register";

export default function SingUp({ handleClose }: { handleClose: () => void }) {
    const [step, setStep] = useState(1)
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        isValid: false,
    })

    const onNextBtnClickHandler = () => {
        setStep(step + 1)
    }
    const onBackBtnClickHandler = () => {
        setStep(step - 1)
    }
    const onInputFieldFocus = () => {
        setStep(1)
    }

    const updateFormValue = (name: string, value: string | boolean) => {
        setForm(state => ({ ...state, [name]: value }));
    };




    return (
        <>
            <Box
                display="flex"
            >
                {step == 1 ?
                    <IconButton onClick={handleClose}><CloseIcon /></IconButton>
                    :
                    <IconButton onClick={onBackBtnClickHandler}><ArrowBackIosIcon /></IconButton>
                }
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
                    step === 1 && <FirstModalStep formData={form} onClickHandler={onNextBtnClickHandler} updateFormValue={updateFormValue} />
                }
                {
                    step === 2 && <SecondModalStep onClickHandler={onNextBtnClickHandler} />
                }
                {
                    step === 3 && <ThirdModalStep formData={form} onClickHandler={onNextBtnClickHandler} onFocusHandler={onInputFieldFocus} />
                }
                {
                    step === 4 && <FourthModalStep onClickHandler={onNextBtnClickHandler} />
                }
                {
                    step === 5 && <FifthModalStep formData={form} updateFormValue={updateFormValue} onClickHandler={handleClose} />
                }


            </ModalLayout >
        </>
    )
}