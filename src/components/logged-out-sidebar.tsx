import React from "react";
import { Link } from "react-router-dom";

export const LoggedOutSideBar = () => {
  return (
    <div>
      <Link to="/login">로그인</Link>
      <Link to="/sign-in">새 계정 만들기</Link>
    </div>
  );
};
