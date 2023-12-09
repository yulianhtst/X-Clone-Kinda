import { API } from '@/Constants'
import { Box, Button, Typography } from '@mui/material'
import useSWR from 'swr'
import axios from 'axios'
import { log } from 'util'
import { setDislikeCS, setLikeCS } from '@/services/ClientSide/likesCS'
import { useState, useEffect, useContext } from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { AuthContext } from '@/context/AuthContext'
import { createCommentCS } from '@/services/ClientSide/commentsCS'
import { useRouter } from 'next/router'

const fetcher = (url: string) => axios.get(url).then(res => res.data)


export const PostLayout = ({ postId, publisherId, children, navigation }: any) => {


  const { auth } = useContext(AuthContext)
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const router = useRouter()

  const { data: user, error, isLoading } = useSWR(`${API}/users/${publisherId}`, fetcher)
  //Този интервал може да направи грешка ако лайка се таймне с заявката за всички лайкове
  const { data: likesData, mutate: mutateAllLikesData } = useSWR(`${API}/likes/${postId}`, fetcher, { refreshInterval: 1000 * 60 })
  // const { data: likesData } = useSWR(`${API}/likes/${postId}`, fetcher)

  const loggedUser = auth?.user._id

  useEffect(() => {
    const alreadyLiked = (likesData?.likes || []).some((x: any) => {
      const postPublisher = x.user_id

      return loggedUser === postPublisher
    })
    alreadyLiked ? setIsLiked(true) : setIsLiked(false)
  }, [likesData])


  const likeClickHandler = async (e) => {
    const liked = await setLikeCS(postId, loggedUser)
    if (liked) {
      setIsLiked(true)
      mutateAllLikesData({ ...likesData, liked })
    }
  }
  const dislikeClickHandler = async () => {
    const disliked = await setDislikeCS(postId, loggedUser)
    if (disliked) {
      setIsLiked(false)
      mutateAllLikesData({ disliked, ...likesData })
    }
  }
  const commentClickHandler = async () => {
    // await createCommentCS(postId, loggedUser,content)
  }
  const postClickHandler = (e) => {
    // Get the clicked element
    const clickedElement = e.target;

    if (!clickedElement.closest('.inner-elements')) {
      if (navigation) {
        router.push(`${user.name}/${postId}`);
      }
    }
  };

  return (
    <Box
      onClick={postClickHandler}
      sx={{ border: 'solid red' }}
    >
      <Box display="flex" className="inner-elements">
        <Typography>
          {isLoading ? 'Loading' : (!user ? 'Error' : `@${user.name}`)}
        </Typography>
      </Box>
      {children}

      <Box display="flex" justifyContent="space-around" className="inner-elements">
        <Button size='small'
          // variant={isLiked && 'contained'}
          onClick={isLiked ? dislikeClickHandler : likeClickHandler}
        >
          <Typography
            fontSize='10px'
          >
            {/* Like :{likes} */}
            Like :{likesData?.likes?.length}
          </Typography>
        </Button>
        <Button size='small' className="inner-elements">
          <Typography
            onClick={commentClickHandler}
            fontSize='10px'
          >
            Comment
          </Typography>
        </Button>
      </Box>
    </Box>
  );

}
