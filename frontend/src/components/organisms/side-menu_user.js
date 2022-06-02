import React from "react";
import styled from "styled-components";
import { SideNotUser } from "../molecules/side-menu-user_not-user";
import { SideIsUser } from "../molecules/side-menu_user_is-user";

export const SideUser = ({ user }) => {
  return (
    <SideUserContainer>
      <div>{user ? <SideIsUser user={user} /> : <SideNotUser />}</div>
    </SideUserContainer>
  );
};

const SideUserContainer = styled.div`
  width: 100%;
  word-wrap: break-word;
`;
