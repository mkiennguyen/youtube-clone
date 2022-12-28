import { createBrowserRouter } from "react-router-dom";
import { Auth } from "../features/SignIn";
import React from "react";
export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Auth />,
  },
  {
    path: "/",
    element: <h1> Home page</h1>,
  },
]);
