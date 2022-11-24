import React, { useRef } from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { LoggedOutNavbar } from "../components/logged-out-navbar";
import homebackground from "../assets/images/mainimage.jpg";
import { Link } from "react-router-dom";

export const MainPage = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const newsRef = useRef<HTMLDivElement>(null);

  const onHomeClick = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  };
  const onAboutClick = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  };
  const onNewsClick = () => {
    newsRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  return (
    <>
      <Helmet>
        <title>산책 | 메인</title>
      </Helmet>
      <LoggedOutNavbar onHomeClick={onHomeClick} onAboutClick={onAboutClick} onNewsClick={onNewsClick} />
      <MainPageContainer>
        <HomeSection ref={homeRef}>
          <HomeContent>
            <HomeTitle>
              독서를 기록하고
              <br />
              업적을 완료해 보세요
            </HomeTitle>
            <HomeJoinLink to="sign-up">JOIN ME!</HomeJoinLink>
          </HomeContent>
        </HomeSection>
        <AboutSection ref={aboutRef}>ABOUT</AboutSection>
        <NewsSection ref={newsRef}>NEWS</NewsSection>
      </MainPageContainer>
    </>
  );
};

const MainPageContainer = styled.main`
  margin: 110px auto 0 auto;
  width: 93%;
  height: 500vh;
  background-color: #b2b2b2;
`;

const HomeSection = styled.section`
  width: 100%;
  height: calc(100vh - 110px);
  background-image: url(${homebackground});
  background-size: 150vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100;
`;

const HomeContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.7);
`;

const HomeTitle = styled.h1`
  font-size: 48pt;
  color: white;
`;

const HomeJoinLink = styled(Link)`
  background: none;
  border: 2px solid;
  width: 120px;
  height: 52px;
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

const AboutSection = styled.section`
  width: 100%;
  height: calc(100vh - 110px);
  background-color: #3dd8ff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100;
`;

const NewsSection = styled.section`
  width: 100%;
  height: calc(100vh - 110px);
  background-color: #8ac9ac;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100;
`;
