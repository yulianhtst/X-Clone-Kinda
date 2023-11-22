import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export default function CloseButton({ handleClose }: { handleClose: () => void }) {
    return <IconButton onClick={handleClose}><CloseIcon /></IconButton>
}
