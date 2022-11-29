import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LoggedInSideBar } from "../components/logged-in-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { MainSancheksList } from "../components/main-sancheks-list";

export const MainUserPage = () => {
  return (
    <>
      <Helmet>
        <title>산책 | 메인</title>
      </Helmet>
      <LoggedInMainPage>
        <LoggedInSideBar />
        <LoggedInMainContainer>
          <MainSancheksList />
          <WriteSanchekButton to="/write">
            <FontAwesomeIcon icon={faPenNib} />
          </WriteSanchekButton>
        </LoggedInMainContainer>
      </LoggedInMainPage>
    </>
  );
};

const LoggedInMainPage = styled.main`
  display: flex;
  flex-direction: row;
  width: 100vw;
  background: linear-gradient(217deg, rgba(161, 255, 206, 0.8), rgba(255, 0, 0, 0) 30.71%),
    linear-gradient(127deg, rgba(253, 231, 140, 0.984), rgba(0, 255, 0, 0) 50.71%),
    linear-gradient(336deg, rgba(255, 255, 255, 0), rgba(0, 0, 255, 0) 70.71%);
`;

const LoggedInMainContainer = styled.section`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WriteSanchekButton = styled(Link)`
  position: fixed;
  right: 50px;
  bottom: 50px;
  width: 50px;
  height: 50px;
  background-color: #babd42;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: rotate 0.6s ease-in-out;
  color: white;
  &:visited {
    text-decoration: none;
    color: white;
  }
  &:hover {
    rotate: 360deg;
  }
`;
