import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "../pages/404";
import { LoginPage } from "../pages/login-page";
import { MainPage } from "../pages/main-page";
import { SignUpPage } from "../pages/signup-page";
import { SupportPage } from "../pages/support-page";

const LoggedOutRoutes = [
  {
    path: "/",
    component: <MainPage />,
  },
  {
    path: "/login",
    component: <LoginPage />,
  },
  {
    path: "/sign-up",
    component: <SignUpPage />,
  },
  {
    path: "/support",
    component: <SupportPage />,
  },
];

export const LoggedOutRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {LoggedOutRoutes.map(route => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
