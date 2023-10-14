import { Modal, Box, Typography, Button, TextField, IconButton } from "@mui/material"

export default function SingUp() {
    return (
        <Box
            position="absolute"
            display="flex"

            sx={{
                width: '400px',
                bgcolor: 'white',
                border: '2px solid #000',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                color: 'black'
            }}
        >
            <TextField />
        </Box>
    )
}