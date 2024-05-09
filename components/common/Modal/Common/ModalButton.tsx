import { Button, styled } from "@mui/material";

type ModalButtonProps = {
    disabled?: boolean,
    handler: () => void,
    content: string
}

export default function ModalButton({ disabled = false, handler, content }: ModalButtonProps) {
    return (
        <StyledButton
            disabled={disabled}
            onClick={handler}
        >
            {content}
        </StyledButton>
    )
}

const StyledButton = styled(Button)({
    backgroundColor: 'lightblue',
    borderRadius: '20px',
    margin: "auto 0 50px 0",
    height: '50px',
})