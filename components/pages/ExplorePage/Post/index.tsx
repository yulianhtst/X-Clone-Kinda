import { connectDb } from '@/dbConfig/dbConfig'
import User from '@/models/User'
import { Box, Typography, Button, Icon } from '@mui/material'
import Image from 'next/image'
import img from '@/public/images/DSC_0078.JPG'
import { useRef, useEffect, useState, ReactNode, useContext } from 'react'
import { PostInfo } from './PostInfo'
import { AuthContext } from '@/context/AuthContext'
import { setLikeCS } from '@/services/ClientSide/likesCS'
import { PostLayout } from './PostLayout'

type PostProps = {
    _id: string,
    user_id: string,
    content: string,
    comments?: Array<any>,
    likes?: Array<any>,
    createdAt: string,
    updatedAt: string,
}

export const Post = ({ content, user_id, _id }: PostProps) => {
    const [postTextCut, setPostTextCut] = useState<boolean>(false)
    const divRef = useRef<ReactNode | null>(null)

    useEffect(() => {
        const divHeight = divRef.current?.clientHeight || 0;
        const linesInText = 6;
        const lineHeight = 20;

        if (divHeight / linesInText >= lineHeight) {
            setPostTextCut(true);
        } else {
            setPostTextCut(false);
        }
    }, [content]);

    //Can be inside layout


    return (
        <Box display="flex" sx={{ p: '16px  16px 0 16px', }}>
            <Box sx={{ mr: '12px' }}>
                <Icon sx={{ borderRadius: '50%', }}>
                    <Image width={24} height={24} alt="smth" src={img} />
                </Icon>

            </Box>
            <Box display="flex" flexDirection="column">
                {/* <PostInfo id={user_id} /> */}
                <PostLayout
                    postId={_id}
                    userId={user_id}
                >
                    <Box>
                        <Box
                            ref={divRef}
                            sx={{
                                height: 'auto',
                                overflow: 'hidden',
                                ...(postTextCut && { maxHeight: '120px' })
                            }}
                        >
                            <Typography
                                sx={{
                                    wordWrap: 'break-word',
                                    lineHeight: '20px',
                                    ...(postTextCut ? { overflow: 'true' } : { overflow: 'false' })
                                }}
                            >
                                {content}
                            </Typography>
                        </Box>
                        {postTextCut &&
                            <Typography onClick={() => setPostTextCut(false)}> Show More</Typography>
                        }
                        {/* <Box>
                <Image />
                </Box> */}
                    </Box>
                    {/* <Box>

                    <Button size='small'>
                        <Typography
                            onClick={likeHandler}
                            fontSize='10px'
                        >
                            Like
                        </Typography>
                    </Button>
                    <Button size='small'>
                        <Typography fontSize='10px'>
                            Comment
                        </Typography>
                    </Button>
                </Box> */}
                </PostLayout>
            </Box>
        </Box >

    )
}

