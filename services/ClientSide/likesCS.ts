import { API } from "@/Constants";
import axios from "axios";

export const setLikeCS = async (postId: string, userId: string) => {
  const likedPost = await axios.put(`${API}/likes/${postId}/like`, { userId });
  // const like = await axios.put(`${API}/likes/${postId}/like`, {userId});
  return likedPost.data;
};
export const setDislikeCS = async (postId: string, userId: string) => {
  const dislikedPost = await axios.put(`${API}/likes/${postId}/dislike`, {
    userId,
  });
  return dislikedPost.data;
};
