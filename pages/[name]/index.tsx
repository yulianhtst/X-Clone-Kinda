import { useRouter } from "next/router"
import Layout from "@/components/layout/mainLayout";
import ProfilePage from "@/components/pages/ProfilePage";


export default function UserProfile() {
    const router = useRouter()

    // return <h1>Name of {router.query.name}</h1>
    // return <RoutingComponent />

    return (
        <Layout >
            <ProfilePage />
        </Layout>
    )
}
