import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import type { MouseEvent } from "react";
import TestFn from "../Test";

export default function AsideComponent() {
    const router = useRouter()

    const onClickhandler = (e: MouseEvent<HTMLDivElement>, path: string) => {
        router.push(path)
    }

    return (
        <Box
            sx={{ maxWidth: '33vw', }}
            display="flex"
            justifyContent="end"

        >
            <Box
                display="flex"
                flexDirection="column"
                sx={{
                    width: '275px',

                    ">*": {
                        color: "white",
                        textAlign: 'left',
                        width: '100%',
                        cursor: 'pointer',
                        "&:hover": {
                            backgroundColor: 'white'
                        },

                    },
                }}
            >
                <Box onClick={(e) => onClickhandler(e, '/')} ><Typography>Home</Typography></Box>
                <Box onClick={(e) => onClickhandler(e, '/explore')} ><Typography>Explore</Typography></Box>
                <Box onClick={(e) => onClickhandler(e, '/notifications')} ><Typography>Notifications</Typography></Box>
                <Box onClick={(e) => onClickhandler(e, '/messages')} ><Typography>Messages</Typography></Box>
                <Box onClick={(e) => onClickhandler(e, '/lists')} ><Typography>Lists</Typography></Box>
                <Box onClick={(e) => onClickhandler(e, '/bookmarks')} ><Typography>Bookmarks</Typography></Box>
                <Box onClick={(e) => onClickhandler(e, '/communities')} ><Typography>Communities</Typography></Box>
                <Box onClick={(e) => onClickhandler(e, '/premium')} ><Typography>Premium</Typography></Box>
                <Box onClick={(e) => onClickhandler(e, '/profile')} ><Typography>Profile</Typography></Box>
                <Box onClick={(e) => onClickhandler(e, '/more')} ><Typography>More</Typography></Box>
                {/* <Button startIcon={'Helloo'} fullWidth={true}></Button> */}

            </Box>
        </Box >
    )
}