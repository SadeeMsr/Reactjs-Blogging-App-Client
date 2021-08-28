import React from "react";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="single__post">
      <div className="singlePost__wrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="singlePost__img"
        />
        <h1 className="singlePost__tittle">
          Lorem ipsum dolor sit.
          <div className="singlePost__edit">
            <i className="singlePost__icon far fa-edit"></i>
            <i className="singlePost__icon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePost__info">
        <span className="singlePost__author">
          Author: <b>Sadee Rohan</b>
        </span>
        <span className="singlePost__date">1 hour ago</span>
        </div>
        <p className="singlePost__desc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima nam
        tempore quia sit debitis fugit dignissimos hic cupiditate quo unde in
        veritatis, quaerat pariatur voluptatem quos ad fuga exercitationem
        voluptas sapiente amet illum et nisi inventore qui! Autem porro, fugiat
        quibusdam facere rem sit natus aliquid ratione sapiente! Ut molestiae
        eius laborum hic corporis aperiam quidem suscipit, obcaecati deserunt
        voluptatem, est deleniti provident. Ratione sit ex saepe voluptates
        sint, et doloremque ut, dolorem repellat magni exercitationem adipisci
        inventore repudiandae beatae soluta. Totam, perferendis provident. Est
        id aperiam magnam voluptates aut, laudantium provident aliquid deleniti
        minus nisi rem. Ducimus, eligendi voluptatum!
      </p>
      </div>
    </div>
  );
}
