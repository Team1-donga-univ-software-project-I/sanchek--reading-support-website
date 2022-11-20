import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useMe } from "../hooks/useMe";
import { Link } from "react-router-dom";

export const LoggedInSideBar = () => {
  const { data, loading, error } = useMe();

  return (
    <div>
      <h1>side bar</h1>
      <p>{data?.me.nickname}</p>
      <Link to="/edit-profile">
        <FontAwesomeIcon icon={faPen} />
      </Link>
      <button>로그아웃</button>
    </div>
  );
};
