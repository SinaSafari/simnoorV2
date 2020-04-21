import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useRouter } from "next/router";
import Link from "next/link";

const NavigationBar = () => {
  const { isLoggedIn, logout, isEng, changeLang } = useContext(AppContext);
  const router = useRouter();
  const logoutHandler = () => {
    logout();
    router.push("/");
  };

  if (isEng) {
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4  bg-white border-bottom shadow-sm">
        {/* <h5 className=" ltrfont my-0 mr-md-auto font-weight-normal">
          SimnnorYazdan
        </h5> */}
        <img
          src="/icons/simnoorlogo.png"
          className="my-0 mr-md-auto font-weight-normal"
          width="100"
          height="55"
        />
        <nav className="my-2 my-md-0 mr-md-3">
          <Link href="/">
            <a className="p-2 text-dark">Home</a>
          </Link>
          <Link href="/products">
            <a className="p-2 text-dark">Products</a>
          </Link>
          <Link href="/about">
            <a className="p-2 text-dark">About Us</a>
          </Link>
          <Link href="/contact">
            <a className="p-2 text-dark">Contact us</a>
          </Link>
          {isLoggedIn && (
            <Link href="/profile">
              <a className="p-2 text-dark">Profile</a>
            </Link>
          )}
        </nav>
        {isLoggedIn && (
          <a className="btn btn-outline-primary mx-1" onClick={logoutHandler}>
            Logout
          </a>
        )}
        {!isLoggedIn && (
          <Link href="/auth">
            <a className="btn btn-outline-primary mx-1">Login</a>
          </Link>
        )}

        <a onClick={changeLang} className="btn btn-outline-primary mx-1">
          FA
        </a>
      </div>
    );
  }
  if (!isEng) {
    return (
      <div className="rtlfont d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom shadow-sm">
        {/* <h5 className=" rtlfont my-0 mr-md-auto font-weight-normal">
          سیم نور یزدان
        </h5> */}
        <img
          src="/icons/simnoorlogo.png"
          className="my-0 mr-md-auto font-weight-normal"
          width="100"
          height="55"
        />
        <nav className="my-2 my-md-0 mr-md-3">
          <Link href="/">
            <a className="p-2 text-dark">خانه</a>
          </Link>
          <Link href="/products">
            <a className="p-2 text-dark"> محصولات </a>
          </Link>
          <Link href="/about">
            <a className="p-2 text-dark">درباره ما</a>
          </Link>
          <Link href="contact">
            <a className="p-2 text-dark">تماس با ما</a>
          </Link>
          {isLoggedIn && (
            <Link href="/profile">
              <a className="p-2 text-dark">پروفایل</a>
            </Link>
          )}
        </nav>
        {isLoggedIn && (
          <a className="btn btn-outline-primary mx-1" onClick={logoutHandler}>
            خروج
          </a>
        )}
        {!isLoggedIn && (
          <Link href="/auth">
            <a className="btn btn-outline-primary mx-1">ورود</a>
          </Link>
        )}
        <a
          onClick={changeLang}
          className="ltrfont btn btn-outline-primary mx-1"
        >
          EN
        </a>
      </div>
    );
  }
};

export default NavigationBar;
