import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export const ExitButton = ({ link }) => {
  return (
    <ExitLink to={link}>
      <FontAwesomeIcon icon={faClose} size="2x" />
    </ExitLink>
  );
};

const ExitLink = styled(Link)`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #82954b;
`;
