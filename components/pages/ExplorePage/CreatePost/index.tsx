import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { Icon } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Image from 'next/image';
import img from '@/public/images/DSC_0078.JPG'
import { useState, useContext } from 'react'
import axios from 'axios';
import { AuthContext } from '@/context/AuthContext';
import { API } from '@/Constants';

export default function CustomizedInputBase() {
    const [postText, setPostText] = useState()
    const { auth } = useContext(AuthContext)
    const onClick = async () => {
        const user = auth.user
        const postData = {
            user_id: user._id,
            content: postText,
        }


        const createdPost = await axios.post(`${API}/posts`, postData)

    }
    const onChange = (e) => {
        const value = e.target.value
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