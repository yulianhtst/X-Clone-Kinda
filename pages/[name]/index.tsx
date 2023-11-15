import { useRouter } from "next/router"
import Layout from "@/components/layout/MainLayout";
import ProfilePage from "@/components/pages/ProfilePage";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from 'react'

export default function UserProfile() {
    const router = useRouter()
    const { auth } = useContext(AuthContext)
    // return <h1>Name of {router.query.name}</h1>
    // return <RoutingComponent />


    return (
        <Layout >
            <ProfilePage />
        </Layout>
    )
}
