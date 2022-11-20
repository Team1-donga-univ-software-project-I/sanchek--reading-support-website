import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "../pages/404";
import { MyProfile } from "../pages/my-profile";
import { MainUserPage } from "../pages/main-user";

const LoggedInRoutes = [
  {
    path: "/",
    component: <MainUserPage />,
  },
  {
    path: "/my-profile",
    component: <MyProfile />,
  },
];

export const LoggedInRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {LoggedInRoutes.map(route => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
