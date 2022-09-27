import React from "react";
import styled from "styled-components";
import { UserProfileIcon } from "../atoms/user-profile_icon";

export const SideIsUser = ({ user }) => {
  return (
    <>
      <SideIsUserContainer>
        <UserProfileIcon />
        <div>simple user profile</div>
        <div>{user}</div>
      </SideIsUserContainer>
    </>
  );
};

const SideIsUserContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`;
