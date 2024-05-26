import React, { useState } from "react";
import "../register/mainregister.scss";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Contexts/AuthContext";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../firebase/firebase";  // Adjust the path according to your project structure

export const Register = () => {
  const [eye, setEye] = useState(false);
  const [form, setForm] = useState({ userEmail: "", userPassword: "", userName: "", userLastName: "" });
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSigningIn(true);
    setError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, form.userEmail, form.userPassword);
      await updateProfile(userCredential.user, { displayName: `${form.userName} ${form.userLastName}` });
      navigate("/data");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSigningIn(false);
    }
  };

  return (
    <>
      <form>
        <div className="login-block">
          <label htmlFor="" className="label-par">
            First Name <span className="label-span">*</span>
          </label>
          <div className="input-block">
            <input
              type="text"
              value={form.userName}
              name="userName"
              onChange={handleChange}
              className="login-input"
            />
          </div>
        </div>
        <div className="login-block">
          <label htmlFor="" className="label-par">
            Last Name <span className="label-span">*</span>
          </label>
          <div className="input-block">
            <input
              type="text"
              value={form.userLastName}
              name="userLastName"
              onChange={handleChange}
              className="login-input"
            />
          </div>
        </div>
        <div className="login-block">
          <label htmlFor="" className="label-par">
            EMAIL <span className="label-span">*</span>
          </label>
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
          <label htmlFor="" className="label-par">
            PASSWORD <span className="label-span">*</span>
          </label>
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
        <button onClick={(e)=>handleSubmit(e)} type="submit" className="login-btn">
          {isSigningIn ? "Registering..." : "Register"}
        </button>
        <p className="btn-par">
          By continuing, I confirm that I have read and accept the{" "}
          <Link className="btn-link">Terms and Conditions</Link> and the{" "}
          <Link className="btn-link">Privacy Policy</Link>.
        </p>
      </form>
    </>
  );
};
