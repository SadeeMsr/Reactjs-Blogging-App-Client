import React from "react";
import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ post }) {
  return (
    <div className="post">
      {post.photo && <img src={post.photo} alt="" className="post__img" />}

      <div className="post__info">
        <div className="post__cats">
          {post.categories.map((c) => (
            <span className="post__cat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
        <span className="post__tittle">{post.tittle}</span>
        </Link>
        <hr />
        <span className="post__date">
          {new Date(post.createdAt).toDateString}
        </span>
      </div>
      <p className="post__desc">{post.desc}</p>
    </div>
  );
}
