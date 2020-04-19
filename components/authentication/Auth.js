import React, { useContext } from "react";
import { useRouter } from "next/router";
import { AppContext } from "../shared/context/AppContext";
import "./Auth.css";
const Auth = () => {
  const router = useRouter();

  const { login, isLoggedIn, isEng } = useContext(AppContext);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    login();
    router.push("/");
  };

  if (isEng) {
    return (
      <div className="container">
        <form onSubmit={formSubmitHandler} style={{ border: "1px solid #ccc" }}>
          <div className="container">
            <h1>Login</h1>
            <p>Please fill in this form to Login to your account.</p>
            <hr />

            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
            />

            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />

            <div className="clearfix">
              <button type="submit" className="signupbtn">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  if (!isEng) {
    return (
      <div className="container">
        <form
          onSubmit={formSubmitHandler}
          // style={{ textAlign: "right" }}
          style={{ border: "1px solid #ccc", textAlign: "right" }}
          className="rtlfont"
        >
          <div className="container">
            <h1>ورود</h1>
            <p>اطلاعات خود را وارد کنید</p>
            <hr />

            <label htmlFor="email">
              <b>ایمیل</b>
            </label>
            <input
              type="text"
              placeholder="ایمیل"
              style={{ textAlign: "right" }}
              name="email"
              required
            />

            <label htmlFor="psw">
              <b>رمز عبور</b>
            </label>
            <input
              style={{ textAlign: "right" }}
              type="password"
              placeholder="رمز عبور"
              name="psw"
              required
            />

            <div className="clearfix">
              <button type="submit" className="signupbtn">
                ورود
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default Auth;
