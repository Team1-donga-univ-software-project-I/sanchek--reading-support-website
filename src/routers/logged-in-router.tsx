import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "../pages/404";
import { MyProfile } from "../pages/my-profile";
import { MainUserPage } from "../pages/main-user";
import { WriteSanchek } from "../pages/write-sanchek";

const LoggedInRoutes = [
  {
    path: "/",
    component: <MainUserPage />,
  },
  {
    path: "/my-profile",
    component: <MyProfile />,
  },
  {
    path: "/write",
    component: <WriteSanchek />,
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
