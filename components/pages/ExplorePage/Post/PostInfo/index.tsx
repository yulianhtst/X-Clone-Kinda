import { Box, Typography } from '@mui/material'
import useSWR from 'swr'
import axios from 'axios'

const fetcher = (url: string) => axios.get(url).then(res => res.data)
export const PostInfo = ({ id }: any) => {
    const { data, error, isLoading } = useSWR(`http://localhost:3000/users/${id}`, fetcher)

    return (
        <Box display="flex">
            <Typography>
                {
                    isLoading ? 'Loading' : (!data ? 'Error' : `@${data.name}`)
                }
            </Typography>
        </Box>
    )
}