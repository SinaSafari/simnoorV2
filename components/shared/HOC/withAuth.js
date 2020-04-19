import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useRouter } from "next/router";

const RedirectToAuthPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/auth");
  });
  return null;
};

export const withAuth = (Component) => {
  return () => {
    const { isLoggedIn } = useContext(AppContext);
    if (isLoggedIn) {
      return <Component />;
    } else {
      return <RedirectToAuthPage />;
    }
  };
};
