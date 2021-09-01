import React, { useContext } from "react";
import "./Topbar.css";
import Pic from "../../images/pp.jpg";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function Topbar() {

  const { user,dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch ({type: "LOGOUT"})
  }


  return (
    <nav className="top">
      <div className="top__left">
        <i className="top__icon fab fa-facebook-square" />
        <i className="top__icon fab fa-instagram-square" />
        <i className="top__icon fab fa-pinterest-square" />
        <i className="top__icon fab fa-twitter-square" />
      </div>

      <div className="top__center">
        <ul className="top__list">
          <li className="topList__item">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topList__item">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topList__item">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topList__item">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topList__item" onClick={handleLogout}>{user && "LOG OUT"}</li>
        </ul>
      </div>
      <div className="top__right">
        {user ? (
          <Link className="link" to="/settings">
            <img className="top__img" src={user.profilePic} alt="ProfilePic" />
          </Link>
        ) : (
          <ul className="top__list">
            <li className="topList__item">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topList__item">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearch__icon fas fa-search" />
      </div>
    </nav>
  );
}
