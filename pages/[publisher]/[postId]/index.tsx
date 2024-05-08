import Layout from "@/components/layout/MainLayout";
import { Post } from "@/components/pages/ExplorePage/Post";
import axios from "axios";
import { GetServerSidePropsContext } from "next";

type PostProps = {
  _id: string;
  user_id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export default function PostID({
  post, 
}: {
  post: PostProps;
}) {
  const { _id, user_id, content, createdAt, updatedAt } = post;

  return (
    <Layout>
      <Post
        _id={_id}
        publisherId={user_id}
        content={content}
        createdAt={createdAt}
        updatedAt={updatedAt}
        navigation={false}
      />
    </Layout>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const postId = context.query.postId;
  try {
    const post = (await axios.get(`${process.env.NEXT_PUBLIC_API_ROUTE}/posts/${postId}`)).data;

    return {
      props: {
        post,
      },
    };
  } catch (error) {
    // Handle errors, e.g., redirect to an error page
    return {
      redirect: {
        destination: "/error", // Your error page
        permanent: false,
      },
    };
  }
};
