import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./login.css";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e) => {
    e.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      navigate("/");
      toast.success("Account created successfully");
    } catch (error) {
      alert(error.message);
    }
  };

  const register = async (e) => {
    e.preventDefault();

    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      if (auth) {
        navigate("/");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon"
          className="login__logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to Amazon's Fake Clone Condition of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button
          type="submit"
          onClick={register}
          className="login__registerButton"
        >
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
