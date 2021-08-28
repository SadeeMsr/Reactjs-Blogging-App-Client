import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__item">
        <span className="sidebar__tittle">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebar__item">
          <span className="sidebar__tittle">CATEGORIES</span>
          <ul className="sidebar__list">
              <li className="sidebar__list_item">Life</li>
              <li className="sidebar__list_item">Music</li>
              <li className="sidebar__list_item">Style</li>
              <li className="sidebar__list_item">Sport</li>
              <li className="sidebar__list_item">Tech</li>
              <li className="sidebar__list_item">Cinema</li>
          </ul>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__tittle">FOLLOW US</span>
        <div className="sidebar__social">
          <i className="sidebar__icon fab fa-facebook-square"></i>
          <i className="sidebar__icon fab fa-instagram-square"></i>
          <i className="sidebar__icon fab fa-pinterest-square"></i>
          <i className="sidebar__icon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
