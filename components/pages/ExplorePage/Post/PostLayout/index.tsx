import { API } from '@/Constants'
import { Box, Button, Typography } from '@mui/material'
import useSWR from 'swr'
import axios from 'axios'
import { log } from 'util'
import { setDislikeCS, setLikeCS } from '@/services/ClientSide/likesCS'

const fetcher = (url: string) => axios.get(url).then(res => res.data)


export const PostLayout = ({ postId, userId, children }: any) => {
    const { data: user, error, isLoading } = useSWR(`${API}/users/${userId}`, fetcher)
    const { data: likesData } = useSWR(`${API}/likes/${postId}`, fetcher)

    const isLiked = (likesData?.likes || []).some((x: any) => userId === x.user_id);

    console.log(isLiked);

    const likeHandler = async () => {
        const liked = await setLikeCS(postId, userId)
    }
    const dislikeHandler = async () => {
        await setDislikeCS(postId, userId)
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
                    Like :{likesData?.likes?.length}
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

