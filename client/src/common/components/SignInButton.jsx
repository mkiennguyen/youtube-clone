import React, { Fragment } from "react";
import "../assets/css/SignInButton.css";

export const SignInButton = () => {
  return (
    <div className="signIn_btn">
      <img
        src="/images/user-icon.svg"
        alt="user-icon"
        className="signIn_btn_child--same"
      />
      <div className="signIn_btn_child--same"> sign in </div>
    </div>
  );
};
