import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("../pages/Home"));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
