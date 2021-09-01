import React, {useState} from "react";
import { Link } from "react-router-dom";
import './registration.css'
import axios from "axios";

export default function Registration() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };


  return (
    <div className="registration">
      <span className="registration__title">Registration</span>
      <form className="registration__form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="registration__input"
          type="text"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          className="registration__input"
          type="text"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="registration__input"
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registration__button">registration</button>
      </form>
      <button className="registrationLogin__button" type="submit">
      <Link className="link" to="/login"> Log in</Link>
      </button>
      {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
    </div>
  );
}
