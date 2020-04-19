import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AppContext } from "../../context/AppContext";
import "./Navigation.css";

const Navigation = () => {
  const { isLoggedIn, logout, isEng, changeLang } = useContext(AppContext);
  const router = useRouter();
  const logoutHandler = () => {
    logout();
    router.push("/");
  };
  return (
    <>
      {isEng && (
        <div>
          <div className="nav">
            <input type="checkbox" id="nav-check" />
            <div className="nav-header">
              <div className="nav-title">BrandLogo</div>
            </div>
            <div className="nav-btn">
              <label htmlFor="nav-check">
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>

            <div className="nav-links">
              <Link href="/">
                <a>Home</a>
              </Link>
              {!isLoggedIn && (
                <Link href="/auth">
                  <a>Login</a>
                </Link>
              )}
              {isLoggedIn && (
                <Link href="/profile">
                  <a>Profile</a>
                </Link>
              )}
              {isLoggedIn && <a onClick={logoutHandler}>Logout</a>}
              {isEng && <button onClick={changeLang}>FA</button>}
              {!isEng && <button onClick={changeLang}>EN</button>}
            </div>
          </div>
        </div>
      )}
      {!isEng && (
        <div className="rtlfont">
          <div className="nav">
            <input type="checkbox" id="nav-check" />
            <div className="nav-header">
              <div className="nav-title">لوگو برند</div>
            </div>
            <div className="nav-btn">
              <label for="nav-check">
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>

            <div className="nav-links">
              <Link href="/">
                <a>خانه</a>
              </Link>
              {!isLoggedIn && (
                <Link href="/auth">
                  <a>ورود</a>
                </Link>
              )}
              {isLoggedIn && (
                <Link href="/profile">
                  <a>پروفایل</a>
                </Link>
              )}
              {isLoggedIn && <a onClick={logoutHandler}>خروج</a>}
              {isEng && <button onClick={changeLang}>FA</button>}
              {!isEng && <button onClick={changeLang}>EN</button>}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
