import React from "react";
import styled from "styled-components";
import { LoginForm } from "../organisms/login-form";
import { LoginMenu } from "../organisms/login-top-menu";

export const LoginTemplate = () => {
  return (
    <LoginTemplateContainer>
      <LoginMenu />
      <LoginForm />
    </LoginTemplateContainer>
  );
};

const LoginTemplateContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffef82;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
