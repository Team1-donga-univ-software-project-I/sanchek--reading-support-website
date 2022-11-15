import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { LoginForm } from "../components/login-form";
import { LogoBox } from "../components/logo-box";

export const LoginPage: React.FC = () => {
  const localToken = localStorage.getItem("token");
  if (localToken) {
    localStorage.removeItem("token");
  }
  return (
    <>
      <Helmet>
        <title>로그인 - 산책</title>
      </Helmet>
      <LoginPageContainer>
        <LogoBox width={200} />
        <LoginForm />
      </LoginPageContainer>
    </>
  );
};

const LoginPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffef82;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
