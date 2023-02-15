import React from "react";

import "../assets/css/SideBar.css";
import useSideBar from "../hooks/useSideBar";
import Item from "./Item";

import { SignInButton } from "./SignInButton";

export function SideBarForClient() {
  const { items } = useSideBar();
  return (
    <div className="sideBar">
      <div className="sideBar__first">
        {items.home.map((item) => (
          <Item {...item} key={item.name} />
        ))}
      </div>

      <div className="sideBar__second">
        {items.videoMode.map((item) => (
          <Item key={item.name} {...item} />
        ))}
      </div>

      <div className="sideBar__signIn ">
        <div>Sign in to like videos, comment, and subscribe.</div>
        <SignInButton />
      </div>

      <div className="sideBar__fourth">
        {items.explore.map((item) => {
          if (item.title) return <div className="sideBar--title"> explore</div>;
          return <Item key={item.name} {...item} />;
        })}
      </div>

      <div className="sideBar__youtubeServices">
        {items.services.map((item) => {
          if (item.title)
            return <div className="sideBar--title">more from youtube</div>;
          return <Item key={item.name} {...item} />;
        })}
      </div>

      <div className="sideBar__support">
        {items.support.map((item) => (
          <Item key={item} {...item} />
        ))}
      </div>
      <div className="sideBar__different">@2023 Google LLC</div>
    </div>
  );
}

//  dynamic category
