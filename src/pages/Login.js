import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import {
  LoginSocialGoogle,
  LoginSocialFacebook,
} from "reactjs-social-login";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate("/homepage");  
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="Email" required>
              Email
            </label>
            <input type="email" placeholder="Enter your email" id="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="Password" required>
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              id="Password"
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
              <span>
                Continue with Facebook 
              </span>
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
              alert("Google login failed");
            }}
          >
            <GoogleLoginButton>
              <span>
                Continue with Google 
              </span>
            </GoogleLoginButton>
          </LoginSocialGoogle>
          
        </div>
        <br />
        <h5 className="form-title">
          <a href="/signup" id="noAccount">
            Don't Have an account?
          </a>
        </h5>
      </div>
    </div>
  );
};

export default Login;
