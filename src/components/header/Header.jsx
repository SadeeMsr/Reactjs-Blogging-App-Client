import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header__tittles">
        <span className="headerTittle__Sm"><i>React & Node</i></span>
        <span className="headerTittle__lg"><i>Blog</i></span>
      </div>
      <img
        className="header__Img"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  );
}
