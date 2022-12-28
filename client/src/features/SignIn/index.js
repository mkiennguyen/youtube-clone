import React from "react";

import { SignInButton } from "../../common/components/SignInButton";

export const Auth = () => {
  const handleSignInWithGoogle = () => {
    window.open("http://localhost:9998/auth/google", "_self");
  };

  return (
    <div onClick={handleSignInWithGoogle}>
      <SignInButton />
    </div>
  );
};
