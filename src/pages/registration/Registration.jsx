import React from "react";
import { Link } from "react-router-dom";
import './registration.css'

export default function Registration() {
  return (
    <div className="registration">
      <span className="registration__title">Registration</span>
      <form className="registration__form">
        <label>Username</label>
        <input
          className="registration__input"
          type="text"
          placeholder="Enter your username..."
        />
        <label>Email</label>
        <input
          className="registration__input"
          type="text"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="registration__input"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="registration__button">registration</button>
      </form>
      <button className="registrationLogin__button">
      <Link className="link" to="/login"> Log in</Link>
      </button>
    </div>
  );
}
