import { Modal, Box, Typography, Button, TextField, IconButton } from "@mui/material"

export default function FirstModalStep({ onClickHandler }) {
    return (<>

        <Box
            sx={{
                mb: '20px'
            }}
        >
            <Typography
                variant="h4"
                fontWeight="bold"
            >
                Create your account
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
                label="Name"
                sx={{
                    margin: '10px 0'
                }} />
            <TextField
                label="Email"
                sx={{
                    margin: '10px 0'
                }} />
            <Button sx={{ bgcolor: 'lightblue', borderRadius: '20px', m: "auto 0 50px 0", height: '50px' }} onClick={onClickHandler}>Next </Button>
        </Box>
    </>
    )
}
