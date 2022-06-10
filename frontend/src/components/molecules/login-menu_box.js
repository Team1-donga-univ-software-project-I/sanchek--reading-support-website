import React from "react";
import styled from "styled-components";

export const LoginMenuBox = ({ children }) => {
  return <LoginMenuBoxContainer>{children}</LoginMenuBoxContainer>;
};

const LoginMenuBoxContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 0px;
  display: flex;
  justify-content: flex-end;
  padding: 0 12px;
`;
