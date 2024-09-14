// SignUp.js
import React from "react";
import { useNavigate } from "react-router-dom";
import signup from "../assets/signup.png";
import "./SignUp.css";

function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/home");
  };

  return (
    <>
      <div className="container-1">
        <div className="left-1">
          <h1>Monitor Your Sustainability Metrics</h1>
          <p>Discover personalized energy-saving</p>
          <img src={signup} alt="Sustainability illustration" className="im" />
          <p>Stay informed about your energy usage.</p>
        </div>
        <div className="right">
          <h2>Get Started with GreenGrid</h2>
          <p>Experience 7 days of premium features. Upgrade anytime.</p>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your full name" required />
            <input type="text" placeholder="Your unique username" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Repeat password" required />
            <button type="submit">Sign up</button>
            <p>or sign in with</p>
            <button type="button">Google</button>
            <button type="button">Facebook</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
