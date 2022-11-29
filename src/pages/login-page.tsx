import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
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
        <title>산책 | 로그인</title>
      </Helmet>
      <LoginPageContainer>
        <LoginPageCard>
          <LogoContainer>
            <LogoBox width={"200px"} />
          </LogoContainer>
          <LoginTitle>Login</LoginTitle>
          <LoginContent>Please sign in to continue.</LoginContent>
          <LoginForm />
          <SignUpText>
            <SignUpTextContent>Don't have an account?</SignUpTextContent>
            <LinkToSignUp to="/sign-up">sign-up</LinkToSignUp>
          </SignUpText>
        </LoginPageCard>
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
  align-items: center;
  flex-direction: column;
`;

const LoginPageCard = styled.section`
  width: 50%;
  height: 95%;
  border-radius: 40px;
  background-color: white;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const LogoContainer = styled.header`
  margin: 30px auto 50px auto;
`;

const LoginTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  width: 370px;
  margin: 0 auto 20px auto;
  font-size: 30pt;
  margin-bottom: 20px;
`;

const LoginContent = styled.div`
  color: #a7a7a7;
  width: 370px;
  margin: 0 auto 20px auto;
  font-size: 15pt;
  margin-bottom: 50px;
`;

const SignUpText = styled.footer`
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  display: flex;
  width: 100%;
  justify-content: center;
`;

const SignUpTextContent = styled.p`
  font-weight: 800;
  margin-right: 10px;
  color: #a7a7a7;
`;

const LinkHover = keyframes`
  0% {
    transform: translateX(0px);
  }
  25% {
    transform: translateX(3px);
  }
  50% {
    transform: translateX(0px);
  }
  75% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0px);
  }
`;

const LinkToSignUp = styled(Link)`
  color: #82954b;
  font-weight: 800;
  text-decoration: none;
  margin-bottom: 50px;
  &:hover {
    animation: ${LinkHover} 1s ease-in-out;
  }
`;
