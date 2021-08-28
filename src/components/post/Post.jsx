import React from "react";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
        className="post__img"
      />
      <div className="post__info">
        <div className="post__cats">
          <span className="post__cat">Music</span>
          <span className="post__cat">Life</span>
        </div>
        <span className="post__tittle">
          Lorem ipsum dolor sit, amet consectetur adipisicing.
        </span>
        <hr />
        <span className="post__date">1 hour ago</span>
      </div>
      <p className="post__desc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
        consequuntur tempora repudiandae error libero reprehenderit!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
        consequuntur tempora repudiandae error libero reprehenderit!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
        consequuntur tempora repudiandae error libero reprehenderit!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
        consequuntur tempora repudiandae error libero reprehenderit!
      </p>
    </div>
  );
}
