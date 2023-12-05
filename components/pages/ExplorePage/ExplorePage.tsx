import { Box } from "@mui/material";
import CustomizedInputBase from "./CreatePost";
import { Post } from "./Post";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from 'react'
type Post = {
    _id: string,
    user_id: string,
    content: string,
    comments?: Array<any>,
    likes?: Array<any>,
    createdAt: string,
    updatedAt: string,
}

export default function ExplorePage({ allPosts }: { allPosts: Array<Post> }) {
    const { auth } = useContext(AuthContext)


    return (
        <Box
            display="flex"
            flexDirection="column"
            sx={{
                border: 'solid red',
                maxWidth: '700px',
            }}
        >
            <CustomizedInputBase />
            {allPosts?.map(post => <Post publisherId={post.user_id} {...post} />)}
        </Box>
    )
}