import { Box, Button, Typography } from '@mui/material'
import useSWR from 'swr'
import axios from 'axios'
import { setDislikeCS, setLikeCS } from '@/services/clientSide/likesCS'
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'
import { useRouter } from 'next/router'
import { useErrorManager } from '@/hooks/useErrorManager'

const fetcher = (url: string) => axios.get(url).then(res => res.data)


export const PostLayout = ({ postId, publisherId, children, navigation }: any) => {
      const { auth } = useContext(AuthContext)
      const [isLiked, setIsLiked] = useState<boolean>(false)
      const router = useRouter()

      const { setCustomError } = useErrorManager()

      const {
            data: user,
            error: userError,
            isLoading: userLoading
      } = useSWR(`http://localhost:3000/users/${publisherId}`, fetcher)

      const {
            data: likesData,
            error: likeError,
            isLoading: likeLoading,
            mutate: mutateAllLikesData
      } = useSWR(`http://localhost:3000/likes/${postId}`, fetcher, { refreshInterval: 1000 * 60 })


      const loggedUser = auth?.user._id

      useEffect(() => {
            const alreadyLiked = (likesData?.likes || [])
                  .some((x: any) => {
                        const postPublisher = x.user_id

                        return loggedUser === postPublisher
                  })
            alreadyLiked ? setIsLiked(true) : setIsLiked(false)
      }, [likesData])


      const likeClickHandler = async (e) => {
            try {
                  const liked = await setLikeCS(postId, loggedUser)
                  if (liked) {
                        setIsLiked(true)
                        mutateAllLikesData({ ...likesData, liked })
                  }
            } catch (error: any) {
                  setCustomError("likeError", error.message, error)
            }
      }
      const dislikeClickHandler = async () => {
            try {
                  const disliked = await setDislikeCS(postId, loggedUser)
                  if (disliked) {
                        setIsLiked(false)
                        mutateAllLikesData({ disliked, ...likesData })
                  }
            } catch (error: any) {
                  setCustomError("dislikeError", error.message, error)
            }

      }
      const commentClickHandler = async () => {
            // router.push()
            // await createCommentCS(postId, loggedUser,content)
      }
      const postClickHandler = (e) => {
            const clickedElement = e.target;

            if (!clickedElement.closest('.inner-elements')) {
                  if (navigation) {
                        router.push(`${user?.name}/${postId}`);
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
                              {userLoading ? 'Loading' : (userError ? 'Error' : `@${user?.name}`)}
                        </Typography>
                  </Box>
                  {
                        userError
                              ? <h1>404</h1>
                              : children
                  }
                  <Box display="flex" justifyContent="space-around" className="inner-elements">
                        <Button size='small'
                              // variant={isLiked && 'contained'}
                              onClick={
                                    isLiked
                                          ? dislikeClickHandler
                                          : likeClickHandler
                              }
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
