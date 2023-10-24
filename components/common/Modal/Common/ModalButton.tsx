import { Button } from "@mui/material";

export default function ModalButton({ isDisabled, onClickHandler, content }: { isDisabled?: boolean, onClickHandler: () => void, content: string }) {
    return <Button sx={{ bgcolor: 'lightblue', borderRadius: '20px', m: "auto 0 50px 0", height: '50px', }} disabled={isDisabled} onClick={onClickHandler}>{content} </Button>
}
