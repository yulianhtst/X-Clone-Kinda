import { Box, Typography, TextField } from "@mui/material";
import { useEffect } from "react";
import type { ChangeEvent } from "react";
import ModalButton from "../../../../Buttons/ModalButton/ModalButton";
import { useValidateFields } from "@/hooks/useValidateFields";
import { useErrorManager } from "@/hooks/useErrorManager";
import { styled } from "@mui/system";
// import * as validate from '@/validation/ClientSide/validateCl'

type FirstModalStepProps = {
  formData: any;
  onNextBtnClickHandler: () => void;
  updateFormValue: (name: string, value: string | boolean) => void;
};

export default function FirstModalStep({
  formData,
  onNextBtnClickHandler,
  updateFormValue,
}: FirstModalStepProps) {
  const { error, setCustomError } = useErrorManager();
  const { checkEmailDbExistance, validateEmail, validateName } =
    useValidateFields(setCustomError);

  const { name, email } = formData;

  const isNameValid = validateName(name);
  const isEmailAvailable = checkEmailDbExistance(email);
  const isEmailValid = validateEmail(email);

  const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    updateFormValue(name, value);
  };
  const onChangeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    updateFormValue(name, value);
  };
  useEffect(() => {
    const isFormValid = !!(isNameValid && isEmailAvailable && isEmailValid);
    updateFormValue("isValid", isFormValid);
  }, [isEmailValid, isEmailAvailable, isNameValid]);

  console.log( error,'emailerr');
  console.log({ isEmailValid, isEmailAvailable });

  return (
    <>
      <Box marginBottom={"20px"}>
        <Typography variant="h4" fontWeight="bold">
          Create your account
        </Typography>
      </Box>
      <InputContainer>
        <TextField
          onChange={onChangeNameHandler}
          value={formData.name}
          name="name"
          label="Name"
          sx={{
            margin: "10px 0",
          }}
        />
        <TextField
          onChange={onChangeEmailHandler}
          value={formData.email}
          error={!!(error.emailError)}
          helperText={error.emailError}
          name="email"
          label="Email"
          sx={{
            margin: "10px 0",
          }}
        />
        <ModalButton
          content={"Next"}
          disabled={!formData.isValid}
          handler={onNextBtnClickHandler}
        />
      </InputContainer>
    </>
  );
}

const InputContainer = styled(Box)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  ">*": {
    width: "100%",
  },
});
