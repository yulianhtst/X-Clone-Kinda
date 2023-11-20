import Layout from "@/components/layout/MainLayout";
import ExplorePage from "@/components/pages/ExplorePage/ExplorePage";
import Post from "@/models/Post";

export default function Explore({ jsonUsers }) {
    console.log(jsonUsers);

    return (
        <Layout>
            <ExplorePage />
        </Layout>
    )
}
export const getServerSideProps = async () => {
    const users = await Post.find({})
    const jsonUsers = JSON.parse(JSON.stringify(users))


    return {
        props: {
            jsonUsers
        }
    }
}