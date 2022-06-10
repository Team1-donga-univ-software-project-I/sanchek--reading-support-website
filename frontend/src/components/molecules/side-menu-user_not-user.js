import React from "react";
import styled from "styled-components";
import { UserLoginButton } from "../atoms/user-login-button";

export const SideNotUser = () => {
  return (
    <SideNotUserContainer>
      <UserLoginButton />
    </SideNotUserContainer>
  );
};

const SideNotUserContainer = styled.div`
  width: 100%;
`;
