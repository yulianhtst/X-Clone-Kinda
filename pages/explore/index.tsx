import Layout from "@/components/layout/MainLayout";
import ExplorePage from "@/components/pages/ExplorePage/ExplorePage";
import { connectDb } from "@/dbConfig/dbConfig";
import Post from "@/models/Post";
import { getAllPostsSS } from "@/services/ServerSide/postSS";
import useSWR from "swr";

export default function Explore({ posts }) {
    console.log(posts);

    return (
        <Layout>
            <ExplorePage allPosts={posts} />
        </Layout>
    )
}
export const getServerSideProps = async () => {
    const posts = await getAllPostsSS()


    return {
        props: {
            posts
        }
    }
}