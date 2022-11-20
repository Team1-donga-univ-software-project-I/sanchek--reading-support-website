import React from "react";
import { useMe } from "../hooks/useMe";

export const MyProfile = () => {
  const { data: userData } = useMe();
  return (
    <>
      <div>my profile</div>
      <p>{userData?.me.nickname}</p>
      <p>{userData?.me.email}</p>
    </>
  );
};
