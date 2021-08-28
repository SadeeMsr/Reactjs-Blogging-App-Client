import React from "react";
import './write.css'

export default function Write() {
  return (
    <div className="write">
      <img
        className="write__img"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="write__form">
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
