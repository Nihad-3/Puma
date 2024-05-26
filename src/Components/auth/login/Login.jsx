import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../login/mainlogin.scss";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../../../firebase/auth";
import { useAuth } from "../../../Contexts/AuthContext";

export const Login = () => {
  const auth = useAuth();
  const userLoggedIn = auth ? auth.userLoggedIn : false;
  const navigate = useNavigate();
  const [eye, setEye] = useState(false);
  const [form, setForm] = useState({ userEmail: "", userPassword: "" });
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      console.log('Email:', form.userEmail);
      console.log('Password:', form.userPassword);
      try {
        await doSignInWithEmailAndPassword(form.userEmail, form.userPassword);
        navigate("/data");
      } catch (error) {
        setError(error.message);
        setIsSigningIn(false);
        console.error('Error during sign-in:', error);
      }
    }
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithGoogle();
        navigate("/data");
      } catch (error) {
        setError(error.message);
        setIsSigningIn(false);
        console.error('Error during Google sign-in:', error);
      }
    }
  };
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/"); // Navigate to home page after logout
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };
  return (
    <>
      {userLoggedIn && <Navigate to="/data" replace />}
      <form>
        <div className="login-block">
          <label htmlFor="" className="label-par">EMAIL <span className="label-span">*</span></label>
          <div className="input-block">
            <input
              type="text"
              value={form.userEmail}
              name="userEmail"
              onChange={handleChange}
              className="login-input"
            />
          </div>
        </div>
        <div className="login-block">
          <label htmlFor="" className="label-par">PASSWORD <span className="label-span">*</span></label>
          <div className="input-block">
            <input
              type={eye ? "text" : "password"}
              value={form.userPassword}
              onChange={handleChange}
              className="login-input"
              name="userPassword"
            />
            <div onClick={() => setEye(!eye)} className="eye-block">
              {eye ? <ImEyeBlocked className="login-eye" /> : <ImEye className="login-eye" />}
            </div>
          </div>
        </div>
        {error && <p className="error-msg">{error}</p>}
        <button onClick={handleSave} className="login-btn">
          {isSigningIn ? "Signing in..." : "LOGIN"}
        </button>
        <p className="btn-par">
          By continuing, I confirm that I have read and accept the{" "}
          <Link className="btn-link">Terms and Conditions</Link> and the{" "}
          <Link className="btn-link">Privacy Policy</Link>.
        </p>
        <Link className="forget-link">FORGOTTEN YOUR PASSWORD?</Link>
      </form>
    </>
  );
};
