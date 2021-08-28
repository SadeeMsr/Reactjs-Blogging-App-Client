import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settings__wrapper">
        <div className="settings__tittle">
          <span className="settingsUpdate__tittle">Update Account</span>
          <span className="settingsDelete__tittle">Delete Account</span>
        </div>
        <form className="settings__form">
          <label htmlFor="">Profile Picture</label>
          <div className="settings__pp">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="file__input">
              <i className="settingsPP__icon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="file__input"
              type="file"
              style={{ display: "none" }}
              className="settingsPP__input"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Sadee Rohan" name="name" />
          <label>Email</label>
          <input type="email" placeholder="srrohan333@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmit__button" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
