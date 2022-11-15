import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logoImg from "../assets/images/logo.png";

interface IProps {
  width: number;
}

export const LogoBox = ({ width }: IProps) => {
  return (
    <LogoContainer>
      <LogoLink to="/">
        <LogoSrc src={logoImg} alt="logoSrc" width={width} />
      </LogoLink>
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const LogoSrc = styled.img`
  display: flex;
  justify-content: center;
  aspect-ratio: auto 1 / 1;
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(1.01);
  }
`;

const LogoLink = styled(Link)``;
