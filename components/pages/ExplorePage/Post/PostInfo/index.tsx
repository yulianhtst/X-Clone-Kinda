import { API } from '@/Constants'
import { Box, Typography } from '@mui/material'
import useSWR from 'swr'
import axios from 'axios'

export const PostInfo = ({ id }: any) => {
    const fetcher = (url: string) => axios.get(url).then(res => res.data)

    const { data, error, isLoading } = useSWR(`${API}/users/${id}`, fetcher)
console.log(data);

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