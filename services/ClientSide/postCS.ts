import axios from "axios";

export const createPost = async (
  userId: string,
  content: string | undefined
) => {
  const postData = {
    user_id: userId,
    content,
  };

  const createdPost = await axios.post(`${process.env.NEXT_PUBLIC_API_ROUTE}/posts`, postData);
  return createdPost.data;
};

export const getAllPostsCS = async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ROUTE}/posts`);
  return response.data;
};
