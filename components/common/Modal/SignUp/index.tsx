import { Modal, Box, Typography, Button, TextField, IconButton } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';

import { useState } from 'react'
import ModalLayout from "@/components/layout/ModalLayout";

import FirstModalStep from "./Steps/FirstStep";
import SecondModalStep from "./Steps/SecondStep";
import ThirdModalStep from "./Steps/ThirdStep";
import FourthModalStep from "./Steps/FourthStep";
import FifthModalStep from "./Steps/FifthStep";
import { checkEmailAvailability } from "@/services/register";

export default function SingUp() {
    const [step, setStep] = useState(1)
    const [free, setFree] = useState(false)
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    })

    const onNextBtnClickHandler = () => {
        setStep(step + 1)
    }
    const updateFormValue = (name: string, value: string) => {
        setForm(state => ({ ...state, [name]: value }));
    };


    const onInputBlurHandler = async (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;

        if (name === "email") {
            const isAvailable = await checkEmailAvailability(value);
            setFree(isAvailable)
        } else {
            updateFormValue(name, value);
        }
    };
    console.log(free);

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
                    step === 1 && <FirstModalStep isEmailFree={free} onClickHandler={onNextBtnClickHandler} onBlurHandler={onInputBlurHandler} />
                }
                {
                    step === 2 && <SecondModalStep onClickHandler={onNextBtnClickHandler} />
                }
                {
                    step === 3 && <ThirdModalStep onClickHandler={onNextBtnClickHandler} />
                }
                {
                    step === 4 && <FourthModalStep onClickHandler={onNextBtnClickHandler} />
                }
                {
                    step === 5 && <FifthModalStep onClickHandler={onNextBtnClickHandler} />
                }


            </ModalLayout >
        </>
    )
}