import React, { useEffect, useState } from "react";
import Login from "../../components/Login";
import SignUp from "../../components/SignUp";
import SplashScreen from "../../components/SplashScreen";

const Auth = () => {
  const [authScreen, setAuthScreen] = useState<"login" | "signup">("login");
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    const timmer = setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000);

    return () => clearTimeout(timmer);
  }, []);

  if (showSplashScreen) {
    return <SplashScreen />;
  }

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
