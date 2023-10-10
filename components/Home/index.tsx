import { Box, Button, Typography } from "@mui/material";
import AsideComponent from "./Aside";
import FeedComponent from "./Feed";
import SuggestionsComponent from "./Suggestions";

export default function HomeComponent() {
    return (
        <Box
            display="flex"
            sx={{
                ">*": { flexBasis: '100%' }

            }}
        >
            <AsideComponent />
            <FeedComponent />
            <SuggestionsComponent />

        </Box >
    )
}
