import React from "react";
import styled from "styled-components";
import { SideUser } from "../organisms/side-menu_user";

export const SideMenu = ({ user }) => {
  return (
    <SideMenuContainer>
      <SideUser user={user} />
    </SideMenuContainer>
  );
};

const SideMenuContainer = styled.div`
  position: fixed;
  width: 300px;
  height: 100%;
  background-color: #14c38e;
`;
