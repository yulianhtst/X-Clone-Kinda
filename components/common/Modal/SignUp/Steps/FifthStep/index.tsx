import { Modal, Box, Typography, Button, TextField, IconButton } from "@mui/material"
import ModalButton from "../../Common/ModalButton"
import { useRef } from 'react'
import { API } from "@/Constants"

export default function FifthModalStep({ onClickHandler }) {


    return (
        <>
            <Box
                sx={{
                    mb: '20px'
                }}
            >
                <Typography
                    variant="h4"
                    fontWeight="bold"
                >
                    Choose password
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
                    label="Password"
                    name="password"
                    type="password"
                    sx={{
                        margin: '10px 0'
                    }}
                />
                <ModalButton onClickHandler={() => {
                    onClickHandler()
                }} />
            </Box>
        </>
    )
}