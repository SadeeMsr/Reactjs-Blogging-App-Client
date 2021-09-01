import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./singlePost.css";
import axios from "axios";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    };
    getPost();
  }, [[path]]);

  return (
    <div className="single__post">
      <div className="singlePost__wrapper">
        {post.photo && (
          <img src={post.photo} alt="" className="singlePost__img" />
        )}
        <h1 className="singlePost__tittle">
          {post.tittle}
          <div className="singlePost__edit">
            <i className="singlePost__icon far fa-edit"></i>
            <i className="singlePost__icon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePost__info">
          <span className="singlePost__author">
            <Link to = {`/?user=${post.username}`} className="link" >
              Author: <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePost__date">
            {new Date(post.createdAt).toDateString}
          </span>
        </div>
        <p className="singlePost__desc">{post.desc}</p>
      </div>
    </div>
  );
}
