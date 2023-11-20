import Layout from "@/components/layout/MainLayout";
import ProfilePage from "@/components/pages/ProfilePage";
import { JWT_LOGIN_SECRET } from "@/Constants";
import jwt from 'jsonwebtoken'
import User from "@/models/User";
import { connectDb } from "@/dbConfig/dbConfig";

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

        const userId = jwt.verify(token, JWT_LOGIN_SECRET)?._id;

        if (!userId) {
            throw new Error('Invalid user ID');
        }

        const foundUser = await User.findById(userId);
        const serializedUser = JSON.parse(JSON.stringify(foundUser));
        const userDTO = {
            _id: serializedUser._id,
            name: serializedUser.name,
            email: serializedUser.email,
            bio: serializedUser.bio,
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
