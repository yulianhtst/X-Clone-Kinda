import Layout from "@/components/layout/MainLayout";
import ExplorePage from "@/components/pages/ExplorePage/ExplorePage";
import { connectDb } from "@/dbConfig/dbConfig";
import Post from "@/models/Post";
import useSWR from "swr";

export default function Explore({ allPosts }) {
    console.log(allPosts);

    return (
        <Layout>
            <ExplorePage allPosts={allPosts} />
        </Layout>
    )
}
export const getServerSideProps = async () => {
    connectDb()
    const data = await Post.find({})
    const allPosts = JSON.parse(JSON.stringify(data))


    return {
        props: {
            allPosts
        }
    }
}