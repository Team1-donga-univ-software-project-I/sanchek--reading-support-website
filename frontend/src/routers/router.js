import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "../pages/404";
import { MainPage } from "../pages/main-page";

const MainRoutes = [
  {
    path: "/",
    component: <MainPage />,
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
