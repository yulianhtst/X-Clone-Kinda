import { Box } from "@mui/material";
import CustomizedInputBase from "./CreatePost";
import { Post } from "./Post";

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

    return (
        <Box
            display="flex"
            flexDirection="column"
            sx={{
                border: 'solid red',
                maxWidth:'700px',
            }}
        >
            <CustomizedInputBase />
            {allPosts.map(post => <Post {...post} />)}
        </Box>
    )
}