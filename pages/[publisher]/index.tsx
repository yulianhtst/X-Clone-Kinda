import Layout from "@/components/layout/MainLayout";
import PostPage from "@/components/pages/PostPage";
import ProfilePage from "@/components/pages/ProfilePage";

export default function Profile() {
    return (
        <Layout>
            <ProfilePage name={"Yulian"} bio={""} email={"yulianhtst3@gmail.com"} />
        </Layout>
    )
}