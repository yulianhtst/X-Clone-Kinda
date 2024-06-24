import { Box, Button, Typography, styled } from "@mui/material";

import logo from "@/public/svgs/WhiteLogo.svg";
import Image from "next/image";

import ModalLayout from "../layout/ModalLayout";
import Link from "next/link";
import { useContext, useState } from "react";
import SignInModal from "../common/Modal/SignInModal";
import SignInPage from "../pages/Auth/SignInPage";
import { ModalContext } from "@/context/ModalContext";
import SignUpModal from "../common/Modal/SignUpModal";

export default function LandingComponent() {
  const { setModalState } = useContext(ModalContext);
  const [modalLayout, setModalLayout] = useState("");

  const modalLayouts = {
    signup: <SignUpModal />,
    signin: <SignInModal />,
  };

  const onSignUpClick = () => {
    setModalState(true);
    setModalLayout("signup");
  };

  const onSignInClick = () => {
    setModalState(true);
    setModalLayout("signin");
  };

  return (
    <Box display={"flex"} width={"100vw"} height={"100vh"}>
      <ContentWrapper sx={{ minWidth: "45vw" }}>
        <Image src={logo} alt={"logo"} />
      </ContentWrapper>

      <ModalLayout>{modalLayouts[modalLayout]}</ModalLayout>

      <ContentWrapper flex={1}>
        <Box>
          <Box>
            <Typography variant="h2">Everything start from here</Typography>
          </Box>
          <Box>
            <Typography>Join today</Typography>
          </Box>
          <AuthBox>
            <Link href="/" as="/auth/flow/signup">
              <AuthButton onClick={onSignUpClick}>Create account</AuthButton>
            </Link>

            <Box display="flex">
              <Line />
              <Typography>&nbsp;or&nbsp;</Typography>
              <Line />
            </Box>

            <Link href="/" as="/auth/flow/signin">
              <AuthButton onClick={onSignInClick}>Login to account</AuthButton>
            </Link>
            <TermsAndConditions />
          </AuthBox>
        </Box>
      </ContentWrapper>
    </Box>
  );
}

const TermsAndConditions = () => (
  <Typography color="#808080" fontSize="0.55rem">
    By signing up, you agree to the
    <span style={{ color: "lightblue" }}>Terms of Service</span>
    and Privacy Policy, including
    <span style={{ color: "lightblue" }}>Cookie Use</span>.
  </Typography>
);
const Line = () => (
  <Box display="flex" flex={1} alignItems="center">
    <Box
      display="flex"
      sx={{
        height: "1px",
        backgroundColor: "white",
        width: "100%",
      }}
    ></Box>
  </Box>
);

const AuthButton = styled(Button)({
  backgroundColor: "white",
  borderRadius: "20px",
  width: "100%",
});
const ContentWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

const AuthBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  maxWidth: "300px",
});
