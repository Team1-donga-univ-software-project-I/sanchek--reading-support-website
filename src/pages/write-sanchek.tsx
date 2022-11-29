import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherPointed } from "@fortawesome/free-solid-svg-icons";
import { WriteSanchekForm } from "../components/create-sanchek-form";
import { LoggedInSideBar } from "../components/logged-in-sidebar";
import { LogoBox } from "../components/logo-box";

export const WriteSanchek = () => {
  return (
    <>
      <Helmet>
        <title>산책 | 글쓰기</title>
      </Helmet>
      <WriteSanchekContainer>
        <LoggedInSideBar />
        <WriteSanchekMain>
          <WriteSanchekLine>
            <LogoBox width="150px" />
            <FontAwesomeIcon icon={faFeatherPointed} />
          </WriteSanchekLine>
          <WriteSanchekForm />
        </WriteSanchekMain>
      </WriteSanchekContainer>
    </>
  );
};

const WriteSanchekContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
`;

const WriteSanchekMain = styled.main`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 0 50px;
`;

const WriteSanchekLine = styled.header`
  width: 100%;
  height: 70px;
  border-bottom: #82954b 3px solid;
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding-bottom: 5px;
  color: #82954b;
  margin-bottom: 20px;
`;
