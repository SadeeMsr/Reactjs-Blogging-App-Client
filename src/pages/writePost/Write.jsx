import React, { useContext, useState } from "react";
import './write.css';
import { Context } from "../../context/Context";
import axios from "axios";

export default function Write() {

  const [tittle, setTittle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      tittle,
      desc,
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };

  return (
    <div className="write">
      <img
        className="write__img"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="write__form" onSubmit={handleSubmit}>
        <div className="writeForm__group">
          <label htmlFor="file__input">
            <i className="write__icon fas fa-plus"></i>
          </label>
          <input id="file__input" type="file" style={{ display: "none" }} />
          <input
            className="write__input"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeForm__group">
          <textarea
            className="write__input write__text"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="write__submit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
