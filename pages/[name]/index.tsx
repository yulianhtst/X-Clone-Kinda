import Layout from "@/components/layout/MainLayout";
import ProfilePage from "@/components/pages/ProfilePage";
import { JWT_LOGIN_SECRET } from "@/Constants";
import jwt from 'jsonwebtoken'
import { connectDb } from "@/dbConfig/dbConfig";
import { findUserByIdSS } from "@/services/ServerSide/userSS";

type UserProfileProps = {
    _id: string;
    name: string;
    email: string;
    bio: string;
}


export async function getServerSideProps(context: any) {
    try {
        connectDb();
        const token = context.req.cookies.loggedUser;

        if (!token) {
            throw new Error('Session expired');
        }

        const userId= jwt.verify(token, JWT_LOGIN_SECRET)._id;

        if (!userId) {
            throw new Error('Invalid user ID');
        }

        const user = await findUserByIdSS(userId)

        const userDTO = {
            _id: user._id,
            name: user.name,
            email: user.email,
            bio: user.bio,
        };

        return {
            props: {
                userDTO
            }
        };
    } catch (error) {
        console.error('Error in getServerSideProps:', error);
        context.res.setHeader('Set-Cookie', `loggedUser=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT`);

        return {
            redirect: {
                destination: '/',
                permanent: true,
            }
        };
    }
}

export default function UserProfile({ userDTO }: { userDTO: UserProfileProps }) {

    return (
        <Layout >
            <ProfilePage {...userDTO} />
        </Layout>
    )
}
