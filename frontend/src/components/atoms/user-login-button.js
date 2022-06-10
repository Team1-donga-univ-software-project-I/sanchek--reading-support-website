import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const UserLoginButton = () => {
  return <LoginButtonContainer to="/login">Login</LoginButtonContainer>;
};

const LoginButtonContainer = styled(Link)`
  width: 100%;
`;
