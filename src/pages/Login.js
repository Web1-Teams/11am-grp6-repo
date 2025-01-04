import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { LoginSocialGoogle, LoginSocialFacebook } from "reactjs-social-login";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
const Login = () => {
  
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event, email, password) => {
    event.preventDefault(); // Prevent default form submission behavior

    //users from localStorage
    const users = JSON.parse(localStorage.getItem("userForms")) || [];
    const currentUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (currentUser) {
      // aolert("Login successfully!");
      toast.success("Login successfully!");
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      navigate("/HomePage");
    } else {
      // aolert("Invalid email or password.");
      toast.error("Invalid email or password.");
      console.log("Entered email:", email);
      console.log("Entered password:", password);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={(event) => handleLogin(event, email, password)}>
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              id="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              id="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              <span>Remember Me</span>
            </label>
          </div>
          <br />
          <button className="hamza-button" type="submit">
            Login
          </button>
        </form>
        <a href="/HomePage" className="text-decoration-none">
          Forgot your password?
        </a>
        <div className="social-login">
          <p>Or continue with</p>

          <LoginSocialFacebook
            appId="587887377179455"
            onResolve={(response) => {
              console.log("Facebook login successful:", response);
              alert("Logged in with Facebook");
              
              navigate("/HomePage");
            }}
            onReject={(error) => {
              console.error("Facebook login failed:", error);
              alert("Facebook login failed");
            }}
          >
            <FacebookLoginButton>
              <span>Continue with Facebook</span>
            </FacebookLoginButton>
          </LoginSocialFacebook>

          <LoginSocialGoogle
            client_id="YOUR_GOOGLE_CLIENT_ID"
            onResolve={(response) => {
              console.log("Google login successful:", response);
              alert("Logged in with Google");
              
              navigate("/HomePage");
            }}
            onReject={(error) => {
              console.error("Google login failed:", error);
              toast.error("Google login failed");
            }}
          >
            <GoogleLoginButton>
              <span>Continue with Google</span>
            </GoogleLoginButton>
          </LoginSocialGoogle>
        </div>
        <br />
        <h5 className="form-title">
          <Link to="/signup" id="noAccount">
            Don't Have an account?
          </Link>
        </h5>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
};

export default Login;
