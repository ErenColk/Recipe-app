import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css"

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleLogin = async (event) => {
    event.preventDefault();
    try {      
     await login(username, password);    
      navigate('/');
    } catch (error) {
      alert("login failed");
    }
};

  return (
    <div
    className="container"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <form onSubmit={handleLogin}>
      <div className="login-form">
        <input
          type="text"
          placeholder="Username"
      
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
 
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <div className="remember-me">
          <input
            type="checkbox"
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <button className="login-btn" type="submit">
          Login
        </button>
    <div className="have-account">
      <p>Don't have an account?  <a href="/signup"> Sign up.</a></p>
    </div>
      </div>
    </form>
  </div>
  );
};

export default Login;
