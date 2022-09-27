import React from "react";
import styled from "styled-components";
import { LogoImage } from "../atoms/logo-image";

export const LoginMenuLogo = () => {
  return (
    <LoginMenuLogoContainer>
      <LogoImage />
    </LoginMenuLogoContainer>
  );
};

const LoginMenuLogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
