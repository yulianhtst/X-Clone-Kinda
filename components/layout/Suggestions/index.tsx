import { Box, Button, Typography } from "@mui/material";

export default function SuggestionsComponent() {
    return (
        <Box
            sx={{ maxWidth: '33vw', }}
            display="flex"
            justifyContent="start"

        >
            <Box
                display="flex"
                flexDirection="column"
                sx={{
                    width: '275px'
                }}
            >
                <Button>Lorem ipsum dolorimus eius amet accusamus aliquam sit?</Button>
                <Button>Lorem ipsum dolorimus eius amet accusamus aliquam sit?</Button>
                <Button>Lorem ipsum dolorimus eius amet accusamus aliquam sit?</Button>

            </Box>
        </Box>
    )
}