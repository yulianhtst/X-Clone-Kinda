import axios from "axios";

export const setLikeCS = async (postId: string, userId: string) => {
  const likedPost = await axios.put(`http://localhost:3000/api/likes/${postId}/like`, { userId });
  return likedPost.data;
};
export const setDislikeCS = async (postId: string, userId: string) => {
  const dislikedPost = await axios.put(`http://localhost:3000/api/likes/${postId}/dislike`, {
    userId,
  });
  return dislikedPost.data;
};
