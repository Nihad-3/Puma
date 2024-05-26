import React, { useState } from "react";
import { useAuth } from "../../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FaRegAddressBook, FaRegUser } from "react-icons/fa";
import "../Data/mainData.scss";
import { MdLockOutline } from "react-icons/md";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { IoFilter } from "react-icons/io5";
export const Data = () => {
  const { currentUser, logout } = useAuth();
  const userEmail = currentUser?.email || "";
  const userName = currentUser?.displayName || userEmail;
  const password = currentUser?.password || "";
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  return (
    <>
      {/* <button onClick={handleLogout}>Logout</button> */}
      <section className="firebase-data-section">
        <div className="contanier">
          <div className="firebase-block">
            <ul className="firebase-header-list">
              <h3 className="firebase-header-list-head">Home</h3>
              <li className="firebase-header-list-item">My Account</li>
            </ul>
            <p className="dashboard-par">Dashboard</p>
            <h3 className="my-account-head">My account</h3>
            <button onClick={handleLogout} className="logout-btn">
              LOGOUT
            </button>

            <div className="profile-description-section">
              <div className="profile-description-block">
                <div className="profile-description-block-parent">
                  <div className="profile-description-block-child">
                    <div className="profile-description-block-child-header">
                      <div className="profile-name">
                        <FaRegUser className="profile-name-user-icon" />
                        <p className="profile-name-user-par">Profile</p>
                      </div>
                      <Link className="edit-profile-link">EDIT PROFILE</Link>
                    </div>
                    <div className="profile-description-block-user">
                      <p className="user-information-block-par">
                        Full Name{" "}
                        <span className="user-information-block-span">
                          {userName}
                        </span>
                      </p>
                      <p className="user-information-block-par">
                        Email{" "}
                        <span className="user-information-block-span">
                          {userEmail}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="profile-description-block-parent">
                  <div className="profile-description-block-child">
                    <div className="address-block">
                      <FaRegAddressBook className="address-block-icon" />
                      <p className="addres-block-par">Address Book</p>
                    </div>
                    <Link className="add-new-link">ADD NEW</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-password-section">
              <div className="profile-password-header">
                <div className="password-text">
                  <MdLockOutline className="password-text-icon" />
                  <p className="password-text-par">Password</p>
                </div>
                <Link className="password-text-link">CHANGE PASSWORD</Link>
              </div>
              <p className="profile-password-text-par">
                Password{" "}
                <span className="profile-password-text-span">
                  {showPassword ? "your-actual-password" : "********"}
                </span>
              </p>
            </div>
            <div className="profile-preferences-section">
              <div className="profile-preferences-block">
                <div className="profile-preferences-block-header">
                  <IoFilter className="profile-preferences-block-header-icon" />
                  <p className="profile-preferences-block-header-par">
                    Preferences
                  </p>
                </div>
                <div className="profile-preferences-block-links">
                  <Link className="profile-preferences-block-link">
                    NEWSLETTER PREFERENCES
                  </Link>
                  <Link className="profile-preferences-block-link">
                    NOTIFICATION PREFERENCES
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
