import axios from "axios";

export const setLikeCS = async (postId: string, userId: string) => {
  const likedPost = await axios.put(`${process.env.NEXT_PUBLIC_API_ROUTE}/likes/${postId}/like`, { userId });
  // const like = await axios.put(`${process.env.NEXT_PUBLIC_API_ROUTE}/likes/${postId}/like`, {userId});
  return likedPost.data;
};
export const setDislikeCS = async (postId: string, userId: string) => {
  const dislikedPost = await axios.put(`${process.env.NEXT_PUBLIC_API_ROUTE}/likes/${postId}/dislike`, {
    userId,
  });
  return dislikedPost.data;
};
