import { Button } from "@mui/material";

type ModalButtonProps = {
    disabled?: boolean,
    handler: () => void,
    content: string
}

export default function ModalButton({ disabled = false, handler, content }: ModalButtonProps) {
    return (
        <Button sx={{ bgcolor: 'lightblue', borderRadius: '20px', m: "auto 0 50px 0", height: '50px', }} disabled={disabled} onClick={handler}>
            {content}
        </Button>
    )
}
