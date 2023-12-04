import Layout from "@/components/layout/MainLayout";
import NotificationsPage from "@/components/pages/NotificationsPage";
import { GetServerSidePropsContext } from "next";

export default function Notifications() {

    
    return (
        <Layout>
            <NotificationsPage />
        </Layout>
    )
}

// export const getServerSideProps = (context: AppContext) => {
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const request = context.req
    const protocol = request.headers['x-forwarded-proto'] || 'http'; // Use 'http' as a default if not provided
    const host = request.headers.host || '';
    const url = `${protocol}://${host}${request.url || ''}`;


    const headers = new Headers({
        'YULIAN': 'YESSSSSSSSSSSSSSSSSSSSS'
    });

    const response = await fetch(url, {
        headers
    });

    
    return {
        props: {
        }
    };
}
