// components/Layout.js
import AsideComponent from './Aside';
import SuggestionsComponent from './Suggestions';
import { Box } from '@mui/material';


export default function Layout({ children }: { children: JSX.Element }) {
    return (

            <Box
                display="flex"
                sx={{
                    ">*": { flexBasis: '100%' }

                }}>

                <AsideComponent />
                {children}
                <SuggestionsComponent />

            </Box>
    );
}
