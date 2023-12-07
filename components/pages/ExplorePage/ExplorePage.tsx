import { Box } from "@mui/material";
import CustomizedInputBase from "./CreatePost";
import { Post } from "./Post";
import { AuthContext } from "@/context/AuthContext";
import { ChangeEvent, useContext, useState } from 'react'
import { createPost } from "@/services/ClientSide/postCS";
import { createDecipheriv } from "crypto";
import useSWR, { mutate } from "swr";
import { API } from "@/Constants";
import axios from "axios";

type Post = {
    _id: string,
    user_id: string,
    content: string,
    comments?: Array<any>,
    likes?: Array<any>,
    createdAt: string,
    updatedAt: string,
}

const fetcher = (url: string) => axios.get(url).then(res => res.data)

export default function ExplorePage() {
    const { auth } = useContext(AuthContext)
    const [postText, setPostText] = useState<string | undefined>(undefined)

    const { data: allPostsData, mutate: mutateAllPosts } = useSWR(`${API}/posts`, fetcher)

    const onClick = async () => {
        try {
            const userId = auth.user._id;

            const createdPost = await createPost(userId, postText);

            mutateAllPosts([...allPostsData, createdPost], false);
        } catch (error) {
            console.log(error);
        }
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        setPostText(value)
    }

    return (
        <Box
            display="flex"
            flexDirection="column"
            sx={{
                border: 'solid red',
                maxWidth: '700px',
            }}
        >
            <CustomizedInputBase onClick={onClick} onChange={onChange} />
            {allPostsData?.map(post => <Post navigation={true} publisherId={post.user_id} {...post} />)}
        </Box>
    )
}
