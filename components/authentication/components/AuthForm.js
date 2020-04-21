import React, { useContext } from "react";
import { useRouter } from "next/router";
import { AppContext } from "../../shared/context/AppContext";

const AuthForm = () => {
  const { isEng, login } = useContext(AppContext);
  const router = useRouter();
  const formSubmitHandler = (e) => {
    e.preventDefault();
    login();
    router.push("/");
  };
  if (isEng) {
    return (
      <form onSubmit={formSubmitHandler} className="ltrdont">
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
  if (!isEng) {
    return (
      <form
        onSubmit={formSubmitHandler}
        style={{ textAlign: "right" }}
        className="rtlfont"
      >
        <div className="form-group">
          <label htmlFor="email">ایمیل</label>
          <input
            type="email"
            className="form-control rtlfont"
            id="email"
            aria-describedby="emailHelp"
            placeholder="آدرس ایمیل خود را وارد کنید"
            style={{ textAlign: "right" }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">رمز عبور</label>
          <input
            type="password"
            className="form-control rtlfont"
            id="password"
            placeholder="رمز عبور خود را وارد کنید"
            style={{ textAlign: "right" }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          ورود
        </button>
      </form>
    );
  }
};

export default AuthForm;
