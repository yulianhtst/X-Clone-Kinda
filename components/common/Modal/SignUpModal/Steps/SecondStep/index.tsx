import {  Box, Typography, Checkbox } from "@mui/material"
import ModalButton from "../../../../Buttons/ModalButton/ModalButton"

export default function SecondModalStep({ onNextBtnClickHandler }: { onNextBtnClickHandler: () => void }) {

    return (
        <>
            <Box display="flex" flexDirection="column" sx={{ overflowX: 'hidden', overflowY: 'auto', height: '340px' }}>
                <Box display="flex">
                    <Typography variant="h6">Customize your experience</Typography>
                </Box>
                <Box display="flex">
                    <Typography variant="h6">Get more out of X</Typography>
                </Box>
                <Box display="flex">
                    <Typography variant="h5">Receive email about your X activity and recommendations.</Typography><Checkbox />
                </Box>
                <Box display="flex">

                    <Typography variant="h6">Connect with people you know</Typography>
                </Box>
                <Box display="flex">
                    <Typography variant="h6">Let others find your X account by your email address.</Typography><Checkbox />
                </Box>
                <Box display="flex">
                    <Typography variant="h6">Personalized ads</Typography>
                </Box>
                <Box display="flex">
                    <Typography variant="h6">You will always see ads on X based on your X activity. When this setting is enabled, X may further personalize ads from X advertisers, on and off X, by combining your X activity with other online activity and information from our partners.</Typography>
                    <Box alignSelf="center">
                        <Checkbox />
                    </Box>
                </Box>

                <Typography variant="h6">By signing up, you agree to our Terms, Privacy Policy, and Cookie Use. X may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy. Learn more</Typography>
            </Box>
            <ModalButton content={'Next'} handler={onNextBtnClickHandler} />
        </>
    )
}