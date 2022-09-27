import React, { useState, useEffect } from "react";
import { SideMenu } from "../components/templates/side-menu";

export const MainPage = () => {
  const [user, setUser] = useState(null);
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    setUserToken(localToken);
  }, []);

  useEffect(() => {
    if (userToken) {
      setUser(userToken);
    }
  }, [userToken]);

  return (
    <div>
      <SideMenu user={user} />
    </div>
  );
};
