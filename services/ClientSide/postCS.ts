import axios from "axios";

export const createPostCS = async (
  userId: string,
  content: string | undefined
) => {
  const postData = {
    user_id: userId,
    content,
  };

  const createdPost = await axios.post(`http://localhost:3000/posts`, postData);
  return createdPost.data;
};

export const getAllPostsCS = async () => {
  const response = await axios.get(`http://localhost:3000/posts`);
  return response.data;
};
