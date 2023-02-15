import { createBrowserRouter } from "react-router-dom";
import React from "react";

import Home from "../features/Home";
import RootLayout from "../layouts/RootLayout";
import WatchVideoLayout from "../layouts/WatchVideoLayout";
import WatchVideo from "../features/WatchVideo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // this path use RootLayout and feature Home : display all tags and video
      {
        path: "",
        element: <Home />,
      },

      // this path use RootLayout and feature Short : display short videos
      {
        path: "short",
        element: <div> short video </div>,
      },
    ],
  },
  {
    path: "/watch",
    element: <WatchVideoLayout />,
    children: [
      // this path use WatchVideoLayout and feature WatchVideo
      {
        path: "",
        element: <WatchVideo />,
      },
    ],
  },
]);
