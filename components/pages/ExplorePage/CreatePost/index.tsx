import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { Icon } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Image from 'next/image';
import img from '@/public/images/DSC_0078.JPG'
import { useState, useContext } from 'react'
import { AuthContext } from '@/context/AuthContext';
import { createPost } from '@/services/ClientSide/postCS';
import type { ChangeEvent } from 'react';

export default function CustomizedInputBase() {
    const [postText, setPostText] = useState<string | undefined>(undefined)
    const { auth } = useContext(AuthContext)

    const onClick = async () => {

        const userId = auth.user._id;
        console.log(auth, 'auth');


        const createdPost = await createPost(userId, postText)
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        setPostText(value)
    }
    return (

        <Paper
            component="form"
            sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: "100%",
                borderRadius: '50px',
            }}
        >
            <Icon sx={{ borderRadius: '50%', }}>
                {/* Image of current user */}
                <Image width={24} height={24} alt="smth" src={img} />
            </Icon>

            <InputBase
                onChange={onChange}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Whats on your mind"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton
                onClick={onClick}
                type="button"
                sx={{ p: '10px' }}
                aria-label="search"
            >
                <SendIcon />
                {/* This icon will be changed */}
            </IconButton>
        </Paper>
    );
}