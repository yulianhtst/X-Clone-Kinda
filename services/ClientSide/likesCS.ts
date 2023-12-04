import { API } from "@/Constants";
import axios from "axios";

export const setLikeCS = async (postId: string, userId: string) => {
  const data = JSON.stringify({ userId });
  const like = await axios.put(`${API}/likes/${postId}/like`, { userId });
  // const like = await axios.put(`${API}/likes/${postId}/like`, {userId});
};
export const setDislikeCS = async (postId: string, userId: string) => {
  const data = JSON.stringify({ userId });
  const like = await axios.put(`${API}/likes/${postId}/dislike`, { userId });
};
