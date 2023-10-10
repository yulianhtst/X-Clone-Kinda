import { Box, Button, Typography } from "@mui/material";

export default function FeedComponent() {
    return (
        <Box
            sx={{ maxWidth: '33vw', }}
            display="flex"
            justifyContent="center"

        >
            <Box
                display="flex"
                flexDirection="column"
                sx={{
                    width: '100%'
                }}
            >
                <Button>Lorem ipsum dolorimus eius amet accusamus aliquam sit?</Button>
                <Button>Lorem ipsum dolorimus eius amet accusamus aliquam sit?</Button>
                <Button>Lorem ipsum dolorimus eius amet accusamus aliquam sit?</Button>

            </Box>
        </Box>
    )
}