import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../common/components/Header";
import { SideBarForClient } from "../common/components/Sidebar";

import "../common/assets/css/RootLayout.css";

export default function RootLayout() {
  {
    /*
      this component called:
        + using components build a layout
        + main layout of the page
      Outlet : represent for child element   
    */
  }
  return (
    <>
      <Header />
      <div className="main">
        <SideBarForClient />
        <div className="sideBar__wall"></div>
        <Outlet />
      </div>
    </>
  );
}
