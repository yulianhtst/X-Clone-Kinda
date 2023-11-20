import { Box } from "@mui/material";
import CustomizedInputBase from "./CreatePost";



export default function ExplorePage() {

    return (
        <Box
            display="flex"
            flexDirection="column"
            sx={{
                border: 'solid red'
            }}
        >
            <CustomizedInputBase />
            <h1>Explore</h1>
        </Box>
    )
}