import React from "react";
import styled from "styled-components";
import { ExitButton } from "../atoms/exit-button";
import { LoginMenuBox } from "../molecules/login-menu_box";
import { LoginMenuLogo } from "../molecules/login-menu_logo";

export const LoginMenu = () => {
  return (
    <LoginMenuContainer>
      <LoginMenuLogo />
      <LoginMenuBox>
        <ExitButton link="/" />
      </LoginMenuBox>
    </LoginMenuContainer>
  );
};

const LoginMenuContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;
