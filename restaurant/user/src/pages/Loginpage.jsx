import React, { useState } from 'react'
import "../styles/Login.scss"
import { setLogin } from '../redux/state';
import {useDispatch} from "react-redux"
import { useNavigate } from 'react-router-dom';


const Loginpage = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate()
 const dispatch = useDispatch()
 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:4001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    if (response.status !== 200) {
      throw new Error("Invalid email or password");
    }

    const loggedIn = await response.json();

    if (loggedIn.user && loggedIn.token) {
      dispatch(
        setLogin({
          user: loggedIn.user,
          token: loggedIn.token
        })
      );
      navigate("/home"); 
    } else {
      throw new Error("Login failed");
    }
  } catch (err) {
    console.log("Login failed!", err.message);
  }
};



  return (
    <div className='login'>
      <div className="login_content">
        <form className="login_content_form" onSubmit={handleSubmit}>
          <input type="email" placeholder='Email' value={email}
          onChange={(e) =>setEmail(e.target.value)} required />
          <input type="password" placeholder='Password'value={password}
          onChange={(e) => setPassword(e.target.value)}  required />
          <button type='submit'>Log In </button>
        </form>
        <a href="/register">Don't have an Account? Register here!</a>
      </div>
    </div>
  )
}

export default Loginpage