import { Box, Typography, IconButton } from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { useState } from 'react'
import ModalLayout from "@/components/layout/ModalLayout";

import FirstModalStep from "./Steps/FirstStep";
import SecondModalStep from "./Steps/SecondStep";
import ThirdModalStep from "./Steps/ThirdStep";
import FourthModalStep from "./Steps/FourthStep";
import FifthModalStep from "./Steps/FifthStep";
import CloseButton from "../../Buttons/CloseButton/CloseButton";

interface SignUp {
    name: string,
    email: string,
    password: string,
    isValid: boolean,
}


export default function SignUpModal({ handleClose }: { handleClose: () => void }) {
    const [step, setStep] = useState<number>(1)
    const [form, setForm] = useState<SignUp>({
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
                    <CloseButton handleClose={handleClose} />
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

            {
                step === 1 && <FirstModalStep formData={form} onNextBtnClickHandler={onNextBtnClickHandler} updateFormValue={updateFormValue} />
            }
            {
                step === 2 && <SecondModalStep onNextBtnClickHandler={onNextBtnClickHandler} />
            }
            {
                step === 3 && <ThirdModalStep formData={form} onNextBtnClickHandler={onNextBtnClickHandler} onFocusHandler={onInputFieldFocus} />
            }
            {
                step === 4 && <FourthModalStep onNextBtnClickHandler={onNextBtnClickHandler} />
            }
            {
                step === 5 && <FifthModalStep formData={form} updateFormValue={updateFormValue} onClickHandler={handleClose} />
            }

        </>
    )
}