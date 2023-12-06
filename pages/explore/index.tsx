import Layout from "@/components/layout/MainLayout";
import ExplorePage from "@/components/pages/ExplorePage/ExplorePage";
import { connectDb } from "@/dbConfig/dbConfig";
import Post from "@/models/Post";
import { getAllPostsSS } from "@/services/ServerSide/postSS";
import { GetServerSidePropsContext } from "next";
import useSWR from "swr";

export default function Explore() {

    return (
        <Layout>
            <ExplorePage  />
        </Layout>
    )
}
// export const getServerSideProps = async (context: GetServerSidePropsContext) => {
//     const posts = await getAllPostsSS()

//     // const hed = context.res.getHeader('auth')
//     // console.log(context.req.headers);
//     // console.log(context.req.url);



//     return {
//         props: {
//             posts,
//         }
//     }
// }