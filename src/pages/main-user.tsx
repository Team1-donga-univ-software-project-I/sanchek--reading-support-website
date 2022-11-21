import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LoggedInSideBar } from "../components/logged-in-sidebar";
import { MainSlider } from "../components/main-slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";

export const MainUserPage = () => {
  return (
    <>
      <Helmet>
        <title>산책 | 메인</title>
      </Helmet>
      <LoggedInMainPage>
        <LoggedInSideBar />
        <LoggedInMainContainer>
          <SliderContainer>
            <MainSlider />
          </SliderContainer>
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
`;

const LoggedInMainContainer = styled.section`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: green;
  align-items: center;
`;

const SliderContainer = styled.div`
  width: 90%;
  max-width: 900px;
  height: 300px;
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
  &:visited {
    text-decoration: none;
    color: black;
  }
`;
