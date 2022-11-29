import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars, faHouse, faBook, faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { useMe } from "../hooks/useMe";
import { Link } from "react-router-dom";
import { LOCALSTORAGE_TOKEN } from "../constants";
import styled from "styled-components";

export const LoggedInSideBar = () => {
  const { data } = useMe();

  const [fold, setFold] = useState(true);

  const foldOnClick = () => {
    setFold(!fold);
  };

  const logoutOnClick = () => {
    localStorage.removeItem(LOCALSTORAGE_TOKEN);
    window.location.replace("/");
  };

  return (
    <SidebarContainer fold={fold}>
      <SideBarHeader>
        {fold && (
          <SidebarHomeButton>
            <SidebarHomeLink to="/">
              <SidebarIcon icon={faHouse} size="xl" />
            </SidebarHomeLink>
          </SidebarHomeButton>
        )}
        <SidebarToggleButton onClick={foldOnClick}>
          <SidebarIcon icon={faBars} size="xl" />
        </SidebarToggleButton>
      </SideBarHeader>
      {fold ? (
        <>
          <SidebarUser>
            <SidebarIcon icon={faUser} size="2x" />
          </SidebarUser>
          <SidebarNickname>{data?.me.nickname}</SidebarNickname>
          <SidebarLogoutButton onClick={logoutOnClick}>로그아웃</SidebarLogoutButton>
          <nav>
            <ul>
              <li>
                <FontAwesomeIcon icon={faChartSimple} />
                <Link to="/my-profile">My Profile</Link>
              </li>
              <li>
                <Link to="">공지사항</Link>
              </li>
              <li>
                <Link to="">내가 쓴 글</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faBook} />
                <Link to="">Guides</Link>
              </li>
            </ul>
          </nav>
        </>
      ) : (
        <>
          <SideFoldBelt />
          <SideFoldText>Sanchek</SideFoldText>
        </>
      )}
    </SidebarContainer>
  );
};

const SidebarContainer = styled.section<any>`
  background-color: #ffef82;
  width: ${props => (props.fold ? "180px" : "60px")};
  transition: width 0.5s ease-in-out;
  height: 100% auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const SideBarHeader = styled.header`
  display: flex;
  margin-bottom: 50px;
`;

const SidebarHomeButton = styled.button`
  background-color: transparent;
  border: none;
  width: 40px;
  height: 40px;
  margin-right: 90px;
`;

const SidebarToggleButton = styled.button`
  background-color: transparent;
  border: none;
  width: 40px;
  height: 40px;
`;

const LinkVisitedStyle = styled(Link)`
  &:visited {
    text-decoration: none;
    color: #82954b;
  }
`;

const SidebarHomeLink = styled(LinkVisitedStyle)`
  width: 100%;
  height: 100%;
`;

const SidebarIcon = styled(FontAwesomeIcon)`
  color: #82954b;
`;

const SidebarUser = styled.p`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #cccccc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

const SidebarNickname = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  margin-bottom: 20px;
  white-space: nowrap;
`;

const SideFoldBelt = styled.div`
  width: 100%;
  height: 70px;
  background-color: #babd42;
  margin-bottom: 50px;
`;

const SideFoldText = styled.p`
  font-size: 30pt;
  writing-mode: vertical-lr;
  font-weight: 800;
  font-family: "Sacramento", cursive;
  font-style: italic;
  margin-right: 10px;
`;

const SidebarLogoutButton = styled.button`
  align-items: center;
  background-color: #82954b;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 20px;
  padding: 5px 30px;
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
  margin-bottom: 50px;
  white-space: nowrap;
  overflow: hidden;
  &:hover,
  &:focus {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: white;
  }
  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    background-color: #82954b;
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    color: white;
    transform: translateY(0);
  }
`;
