import { connectDb } from '@/dbConfig/dbConfig'
import User from '@/models/User'
import { Box, Typography, Button, Icon } from '@mui/material'
import Image from 'next/image'
import img from '@/public/images/DSC_0078.JPG'
import { useRef, useEffect, useState, ReactNode, useContext } from 'react'
import { PostLayout } from './PostLayout'

type PostProps = {
    _id: string,
    publisherId: string,
    content: string,
    comments?: Array<any>,
    likes?: Array<any>,
    createdAt: string,
    updatedAt: string,
}

export const Post = ({ content, publisherId, _id, navigation }: PostProps) => {

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


    return (
        <PostLayout
            postId={_id}
            publisherId={publisherId}
            navigation={navigation}
        >
            <Box
                display="flex"
                sx={{
                    p: '16px  16px 0 16px',
                }}
            >

                <Box sx={{ mr: '12px' }}>
                    <Icon sx={{ borderRadius: '50%', }}>
                        <Image width={24} height={24} alt="smth" src={img} />
                    </Icon>

                </Box>
                <Box display="flex" flexDirection="column">
                    {/* <PostInfo id={publisherId} /> */}
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
                                    ...(postTextCut
                                        ? { overflow: 'true' }
                                        : { overflow: 'false' })
                                }}
                            >
                                {content}
                            </Typography>
                        </Box>
                        {postTextCut &&
                            <Typography
                                onClick={() => setPostTextCut(false)}
                            >
                                Show More
                            </Typography>
                        }
                    </Box>
                </Box>
            </Box >
        </PostLayout >

    )
}

