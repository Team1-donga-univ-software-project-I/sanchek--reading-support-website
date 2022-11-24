import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LogoBox } from "./logo-box";

interface NavbarProps {
  onHomeClick: () => void;
  onAboutClick: () => void;
  onNewsClick: () => void;
}

export const LoggedOutNavbar = ({ onHomeClick, onAboutClick, onNewsClick }: NavbarProps) => {
  return (
    <NavbarContainer>
      <LogoBoxContainer>
        <LogoBox width="140px" />
      </LogoBoxContainer>
      <NavbarNavigation>
        <NavbarNavigationList>
          <li onClick={onHomeClick}>HOME</li>
          <li onClick={onAboutClick}>ABOUT</li>
          <li onClick={onNewsClick}>NEWS</li>
          <li>
            <NoneStyledLink to="/support">GUIDES</NoneStyledLink>
          </li>
          <SocialLinkPopup>
            Social↗
            <div>Update soon!</div>
          </SocialLinkPopup>
        </NavbarNavigationList>
      </NavbarNavigation>
      <JoinButtonForLogin to="/login">LOG IN!</JoinButtonForLogin>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 110px;
  background-color: white;
  display: flex;
  align-items: center;
  z-index: 5;
`;

const LogoBoxContainer = styled.h1`
  margin-left: 20px;
  margin-right: 100px;
`;

const NavbarNavigation = styled.nav`
  width: 100%;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
`;

const NavbarNavigationList = styled.ul`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-around;
`;

const NoneStyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:visited {
    color: black;
  }
`;

const JoinButtonForLogin = styled(Link)`
  background: none;
  border: 2px solid;
  width: 120px;
  height: 42px;
  font: inherit;
  line-height: 1;
  margin: 0.5em;
  color: #8fc866;
  transition: 0.25s;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover,
  &:focus {
    box-shadow: inset 0 0 0 2em #8fc866;
    border-color: #8fc866;
    color: #fff;
  }
`;

const SocialLinkPopup = styled.li`
  position: relative;
  color: #a7a7a7;
  & > div {
    position: absolute;
    bottom: -65px;
    opacity: 0;
    transition: 0.2s;
    width: 150px;
    height: 40px;
    border-radius: 10px;
    background-color: #a7a7a7;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover > div {
    opacity: 1;
  }
`;
