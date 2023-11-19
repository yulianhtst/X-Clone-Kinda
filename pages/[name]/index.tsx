import Layout from "@/components/layout/MainLayout";
import ProfilePage from "@/components/pages/ProfilePage";
import { JWT_LOGIN_SECRET } from "@/Constants";
import jwt from 'jsonwebtoken'
import User from "@/models/User";
import { connectDb } from "@/dbConfig/dbConfig";


export async function getServerSideProps(context) {
    connectDb();
    const token = context.req.cookies.loggedUser;
    const userId = jwt.verify(token, JWT_LOGIN_SECRET)?._id;
    const foundUser = await User.findById(userId);
    const serializedUser = JSON.parse(JSON.stringify(foundUser));
    const user = {
        _id: serializedUser._id,
        name: serializedUser.name,
        email: serializedUser.email,
        bio: serializedUser.bio,
    }
    
    return {
        props: {
            user
        }
    };
}
export default function UserProfile({ user }) {

    return (
        <Layout >
            <ProfilePage {...user} />
        </Layout>
    )
}
