import React, { useState } from "react";
import Login from "../../components/Login";
import SignUp from "../../components/SignUp";

const Auth = () => {
  const [authScreen, setAuthScreen] = useState<"login" | "signup">("login");

  return (
    <>
      {authScreen === "login" ? (
        <Login setAuthScreen={() => setAuthScreen("signup")} />
      ) : (
        <SignUp setAuthScreen={() => setAuthScreen("login")} />
      )}
    </>
  );
};

export default Auth;
