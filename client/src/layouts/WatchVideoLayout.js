import React from "react";

import { Outlet } from "react-router-dom";
import Header from "../common/components/Header";

export default function WatchVideoLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
