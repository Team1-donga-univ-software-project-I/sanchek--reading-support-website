import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MyProfile } from "../pages/my-profile";
import { MainUserPage } from "../pages/main-user";
import { WriteSanchek } from "../pages/write-sanchek";
import { NotFound } from "../pages/404";
import { SupportPage } from "../pages/support-page";
import { SanchekPage } from "../pages/sanchek";

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
  {
    path: "/support",
    component: <SupportPage />,
  },
  {
    path: "/sanchek/:id",
    component: <SanchekPage />,
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
