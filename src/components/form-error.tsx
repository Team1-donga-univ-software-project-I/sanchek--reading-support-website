import React from "react";
import styled from "styled-components";

interface IFormErrorProps {
  errorMessage: string;
}

export const FormError: React.FC<IFormErrorProps> = ({ errorMessage }) => (
  <ErrorMeassageContainer>{errorMessage}</ErrorMeassageContainer>
);

const ErrorMeassageContainer = styled.p`
  color: red;
`;
