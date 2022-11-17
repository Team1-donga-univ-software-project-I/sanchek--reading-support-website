import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { LogoBox } from "../components/logo-box";
import { SignInForm } from "../components/signin-form";

export const SignInPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>산책 | 회원가입</title>
      </Helmet>
      <SignInPageContainer>
        <LogoBox width={"200px"} />
        <SignInForm />
      </SignInPageContainer>
    </>
  );
};

const SignInPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
