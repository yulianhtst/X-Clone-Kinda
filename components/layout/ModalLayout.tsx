// components/Layout.js
import AsideComponent from './Aside';
import SuggestionsComponent from './Suggestions';
import { Box } from '@mui/material';


export default function ModalLayout({ children }: { children: any }) {
    return (
        <Box
            display="flex"
            flexDirection="column"
            sx={{
                p: '0 80px ',
                mt: '40px',
                height: '100%'
            }}
        >

            {children}

        </Box>
    );
}
