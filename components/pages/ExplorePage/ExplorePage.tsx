import { Box } from "@mui/material";
import CustomizedInputBase from "./createPostCS";
import { Post } from "./Post";
import { AuthContext } from "@/context/AuthContext";
import { ChangeEvent, useContext, useState } from 'react'
import { createPostCS } from "@/services/clientSide/postCS";
import useSWR, { mutate } from "swr";
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

    const { data: allPostsData, mutate: mutateAllPosts } = useSWR(`${process.env.NEXT_PUBLIC_API_ROUTE}/posts`, fetcher)


    const onClick = async () => {
        try {
            const userId = auth.user._id;

            const createdPost = await createPostCS(userId, postText);

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
            <CustomizedInputBase
                onClick={onClick}
                onChange={onChange}
            />
            {Array.isArray(allPostsData) &&
                [...allPostsData]
                    //@ts-expect-error
                    .sort((a: Post, b: Post) => new Date(b.createdAt) - new Date(a.createdAt))
                    .map((post) => (
                        <Post
                            navigation={true}
                            publisherId={post.user_id}
                            {...post}
                        />
                    ))
            }
        </Box>
    )
}

