import React from "react";
import { Link } from "react-router-dom";
import './login.css'

export default function Login() {
  return (
    <div className="login">
      <span className="login__title">Login</span>
      <form className="login__form">
        <label>Email</label>
        <input
          className="login__input"
          type="text"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="login__input"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="login__button">Login</button>
      </form>
      <button className="loginRegister__button">
          <Link className="link" to="/register"> Registration</Link>
      </button>
    </div>
  );
}
