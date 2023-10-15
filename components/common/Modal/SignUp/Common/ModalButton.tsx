import { Button } from "@mui/material";

export default function ModalButton({ onClickHandler, }) {
    return <Button sx={{ bgcolor: 'lightblue', borderRadius: '20px', m: "auto 0 50px 0", height: '50px', }} onClick={onClickHandler}>Next </Button>
}
