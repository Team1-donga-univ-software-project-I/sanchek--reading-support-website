import React from "react";
import styled from "styled-components";
import LogoSrc from "../../assets/images/sanchek_logo.png";

export const LogoImage = () => {
  return <LogoImageTag src={LogoSrc} />;
};

const LogoImageTag = styled.img`
  width: 200px;
  height: 65px;
`;
