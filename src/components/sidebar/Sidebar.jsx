import React, { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Sidebar() {
 const [cat, setCat] = useState([]);
 

 useEffect(() => {
   const getCat = async () => {
     const res = await axios.get("/categories");
     setCat(res);
   }
   getCat();
 },[])

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
            {
              cat.map((c) => (
                <Link to = {`/?cat=${c.name}`} className="link" >
                    <li className="sidebar__list_item">{c.name}</li>
                </Link>
              ))
            }
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
