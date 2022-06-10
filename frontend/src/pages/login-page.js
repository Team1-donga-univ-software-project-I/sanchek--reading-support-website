import React from "react";
import styled from "styled-components";
import { LoginTemplate } from "../components/templates/login-template";

export const LoginPage = () => {
  return (
    <LoginPageContainer>
      <LoginTemplate />
    </LoginPageContainer>
  );
};

const LoginPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
