import { Box, Typography, TextField } from "@mui/material"
import CloseButton from "../Common/CloseButton"
import ModalLayout from "@/components/layout/ModalLayout"

export default function Login({ handleClose }) {
    return (
        <>
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
            <ModalLayout>

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
                        // onChange={onChangeNameHandler}
                        // value={formData.name}
                        name="name"
                        label="Name"
                        sx={{
                            margin: '10px 0'
                        }} />
                    <TextField
                        // onChange={onChangeEmailHandler}
                        // value={formData.email}
                        // error={Boolean(message)}
                        // helperText={message}

                        name="email"
                        label="Email"
                        sx={{
                            margin: '10px 0'
                        }} />
                    {/* <ModalButton content={'Next'} disabled={!formData.isValid} handler={onClickHandler} /> */}
                </Box>
            </ModalLayout>

        </>
    )
}