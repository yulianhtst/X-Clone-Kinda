import { AuthContext } from "@/context/AuthContext";
import { logoutCS } from "@/services/clientSide/authServiceCS";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useContext } from 'react'
import { headers } from 'next/headers'

export default function AsideComponent() {
    const router = useRouter()
    const { auth } = useContext(AuthContext)
    const username = auth?.user?.name

    const routes = [
        { path: '/', label: 'Home' },
        { path: '/explore', label: 'Explore' },
        { path: '/notifications', label: 'Notifications' },
        { path: '/messages', label: 'Messages' },
        { path: '/lists', label: 'Lists' },
        { path: '/bookmarks', label: 'Bookmarks' },
        { path: '/communities', label: 'Communities' },
        { path: '/premium', label: 'Premium' },
        { path: `/${username}`, label: 'Profile' },
        // { path: '/more', label: 'More' },
    ];


    const onClickHandler = (path: string) => {
        router.push(path)
    }
    const onlogout = () => {
        logoutCS()
        router.push('/')
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
                        cursor: 'pointer',
                        // "&:hover": {
                        // backgroundColor: 'white'
                        // },

                    },
                }}
            >
                {routes.map((route, index) => (
                    <Box
                        component="button"
                        key={index}
                        onClick={() => onClickHandler(route.path)}
                    >
                        <Typography>{route.label}</Typography>
                    </Box>
                ))}

                <Box
                    component="button"
                    onClick={onlogout}

                >
                    <Typography>Logout</Typography>
                </Box>
            </Box>
        </Box >
    )
}
