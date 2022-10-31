import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "../pages/404";
import { LoginPage } from "../pages/login-page";
import { MainPage } from "../pages/main-page";

const MainRoutes = [
  {
    path: "/",
    component: <MainPage />,
  },
  {
    path: "/login",
    component: <LoginPage />,
  },
];

export const MainRouters = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {MainRoutes.map(route => (
            <Route key={route.path} path={route.path} element={route.component} />
          ))}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
