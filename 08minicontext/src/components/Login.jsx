import React from "react";
import { useContext } from "react";
import { useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const {setUser}=useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName + " " + password);
    setUser({userName,password})
  };
  return (
    <div>
      <input
        type="text"
        value={userName}
        placeholder="username"
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        submit
      </button>
    </div>
  );
};

export default Login;
