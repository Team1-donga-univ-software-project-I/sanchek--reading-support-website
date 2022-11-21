import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
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
      <button onClick={foldOnClick}>fold</button>
      <h1>side bar</h1>
      <p>{data?.me.nickname}</p>
      <Link to="/my-profile">
        <FontAwesomeIcon icon={faUser} />
      </Link>
      <button onClick={logoutOnClick}>로그아웃</button>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.section<any>`
  background-color: #ffef82;
  width: ${props => (props.fold ? "180px" : "80px")};
  transition: width 0.5s ease-in-out;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
