import { useState } from "react";
import { validation } from "../validation";
import "./Login.css";
import rickandmorty from "../images/rickandmorty.png";

export const Form = ({ login }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  const [errors, setErrors] = useState({});

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  return (
    <div>
      <div className="container">
        <img src={rickandmorty} alt="" className="image" />
        <h3 className="login">Login</h3>
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="email">Email </label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red", fontWeight: "bold", WebkitTextStroke: "1px black", fontSize: "large" }}>{errors.email}</p>}

          <label htmlFor="password">Password </label>
          <input
            type="text"
            placeholder="Enter your password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: "red", fontWeight: "bold", WebkitTextStroke: "1px black", fontSize: "large"}}>{errors.password}</p>}

          <button className="submitButton">Submit</button>
        </form>
      </div>
    </div>
  );
};
