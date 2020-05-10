import React, { useState, useCallback } from "react";
import { AppContext } from "./AppContext";

export const AppContextProvider = (props) => {
  // global states
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState();
  const [isEng, setIsEng] = useState(true);
  // global functions
  const login = useCallback((userId) => {
    setIsLoggedIn(true);
    setUserId(userId);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  const changeLang = () => {
    setIsEng(!isEng);
    localStorage.setItem("isEng", isEng);
  };

  return (
    <AppContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        logout: logout,
        login: login,
        userId: userId,
        isEng: isEng,
        changeLang: changeLang,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
