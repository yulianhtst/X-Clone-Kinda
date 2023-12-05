import { API } from '@/Constants'
import { Box, Button, Typography } from '@mui/material'
import useSWR from 'swr'
import axios from 'axios'
import { log } from 'util'
import { setDislikeCS, setLikeCS } from '@/services/ClientSide/likesCS'
import { useState, useEffect, useContext } from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { AuthContext } from '@/context/AuthContext'

const fetcher = (url: string) => axios.get(url).then(res => res.data)


export const PostLayout = ({ postId, publisherId, children }: any) => {
    const { auth } = useContext(AuthContext)
    const [isLiked, setIsLiked] = useState<boolean>(false)
    const [likes, setLikes] = useState<number>(0)
    
    const { data: user, error, isLoading } = useSWR(`${API}/users/${publisherId}`, fetcher)
    const { data: likesData } = useSWR(`${API}/likes/${postId}`, fetcher, { refreshInterval: 11000 })

    const loggedUser = auth?.user._id

    useEffect(() => {
        const alreadyLiked = (likesData?.likes || []).some((x: any) => {
            const postPublisher = x.user_id

            return loggedUser === postPublisher
        })

        console.log(alreadyLiked, 'likedd');

        setLikes(likesData?.likes?.length || 0)
        alreadyLiked ? setIsLiked(true) : setIsLiked(false)
    }, [likesData])


    const likeHandler = async () => {
        const liked = await setLikeCS(postId, loggedUser)
        if (liked) {
            setIsLiked(true)
            setLikes((s: number) => s + 1)
        }
    }
    const dislikeHandler = async () => {
        const disliked = await setDislikeCS(postId, loggedUser)
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
