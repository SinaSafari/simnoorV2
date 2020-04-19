import { createContext } from "react";

export const AppContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  isEng: true,
  changeLang: () => {},
});
