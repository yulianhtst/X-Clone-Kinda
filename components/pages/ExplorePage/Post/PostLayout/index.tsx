import { API } from '@/Constants'
import { Box, Button, Typography } from '@mui/material'
import useSWR from 'swr'
import axios from 'axios'
import { log } from 'util'
import { setDislikeCS, setLikeCS } from '@/services/ClientSide/likesCS'
import { useState, useEffect } from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

const fetcher = (url: string) => axios.get(url).then(res => res.data)


export const PostLayout = ({ postId, userId, children }: any) => {
    const [isLiked, setIsLiked] = useState<boolean>(false)
    const [likes, setLikes] = useState<number>(0)
    const { data: user, error, isLoading } = useSWR(`${API}/users/${userId}`, fetcher)
    const { data: likesData } = useSWR(`${API}/likes/${postId}`, fetcher, { refreshInterval: 11000 })

    // const isLiked = (likesData?.likes || []).some((x: any) => userId === x.user_id);

    useEffect(() => {
        const alreadyLiked = (likesData?.likes || []).some((x: any) => userId === x.user_id)
        setLikes(likesData?.likes?.length || 0)
        alreadyLiked ? setIsLiked(true) : setIsLiked(false)
    }, [likesData])


    const likeHandler = async () => {
        const liked = await setLikeCS(postId, userId)
        if (liked) {
            setIsLiked(true)
            setLikes((s: number) => s + 1)
        }
    }
    const dislikeHandler = async () => {
        const disliked = await setDislikeCS(postId, userId)
        if (disliked) {
            setIsLiked(false)
            setLikes((s: number) => s - 1)
        }
    }
    return (
        <Box>
            <Box display="flex">
                <Typography>
                    {
                        isLoading ? 'Loading' : (!user ? 'Error' : `@${user.name}`)
                    }
                </Typography>
            </Box>
            {children}
            <Button
                size='small'
                variant={isLiked && 'contained'}
            >
                <Typography
                    onClick={isLiked ? dislikeHandler : likeHandler}
                    // onClick={likeHandler
                    fontSize='10px'
                >
                    Like :{likes}
                </Typography>
            </Button>
            <Button size='small'>
                <Typography fontSize='10px'>
                    Comment
                </Typography>
            </Button>
        </Box>
    )
}
