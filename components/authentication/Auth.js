import React, { useContext } from "react";
import { useRouter } from "next/router";
import { AppContext } from "../shared/context/AppContext";
import "./Auth.css";
import AuthForm from "./components/AuthForm";

const Auth = () => {
  const { isEng } = useContext(AppContext);

  return (
    <>
      <h2 className="mt-5" style={{ textAlign: "center" }}>
        {isEng && (
          <span
            style={{ borderBottom: "5px solid orange" }}
            className="ltrfont"
          >
            Login Please
          </span>
        )}
        {!isEng && (
          <span
            style={{ borderBottom: "5px solid orange" }}
            className="rtlfont"
          >
            لطفا وارد شوید
          </span>
        )}
      </h2>
      <div style={{ marginTop: "1px", marginBottom: "150px" }}>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <AuthForm />
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
