import { useReactiveVar } from "@apollo/client";
import React from "react";
import { isLoggedInVar } from "../apollo";
import { LoggedInRouter } from "./logged-in-router";
import { LoggedOutRouter } from "./logged-out-router";

export const MainRouters = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return isLoggedIn ? <LoggedInRouter /> : <LoggedOutRouter />;
};
