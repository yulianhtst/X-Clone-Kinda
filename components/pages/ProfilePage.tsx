type ProfilePageProps = {
    name: string;
    bio: string;
    email: string
}

export default function ProfilePage({
    name,
    bio,
    email
}: ProfilePageProps) {

    return (
        <>
            <h1>{name}</h1>
            <h1>{bio}</h1>
            <h1>{email}</h1>
        </>
    );
}
