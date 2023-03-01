import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "../components/Loader";
import MainLayout from "./layouts/MainLayout";

const Home = React.lazy(() => import("../pages/Home"));
const UserManagement = React.lazy(() => import("../pages/UserManagement"));

const Router = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/user-management"
            element={
              <Suspense fallback={<Loader />}>
                <UserManagement />
              </Suspense>
            }
          />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default Router;
