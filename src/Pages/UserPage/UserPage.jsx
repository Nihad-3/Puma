import React, { useState } from "react";
import "../UserPage/mainuserpage.scss";
import { Link } from "react-router-dom";
import { Login } from "../../Components/auth/login/Login";
import { Register } from "../../Components/auth/register/Register";
export const UserPage = () => {
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);
  const changeLogin = () => {
    setLogin(true);
    setRegister(false);
  };
  const changeRegistr = () => {
    setRegister(true);
    setLogin(false);
  };
  return (
    <>
      <div className="account-section">
        <div className="contanier">
          <h2 className="account-head">My account</h2>
        </div>
      </div>
      <div className="form-section">
        <div className="contanier">
          <div className="form-block">
            <div className="choose-link-block">
              <Link onClick={changeLogin} className="choose-link">
                Login
              </Link>
              <Link onClick={changeRegistr} className="choose-link">
                Create acount
              </Link>
            </div>
            {login ? <Login /> : ""}
            {register ? <Register /> : ""}
          </div>
        </div>
      </div>
    </>
  );
};
