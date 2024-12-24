import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const handleGoogleLogin = () => {
    alert("Logged in with Google");
  };

  const handleFacebookLogin = () => {
    alert("Logged in with Facebook");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label for="Email" required>
              Email
            </label>
            <input type="email" placeholder="Enter your email" id="Email" />
          </div>
          <div className="form-group">
            <label for="Password" required>
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              id="Password"
            />
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              <span> Remember Me</span>
            </label>
          </div>
          <br></br>

          <Link to="./homepage">
            <button className =" hamza-button"type="submit">Login</button>
          </Link>
        </form>
        <Link to="./homepage" className="text-decoration-none">
          Forgot your password ?
        </Link>
        <div className="social-login">
          <p>Or continue with</p>

          <Link
            to="/"
            className="btn facebook-btn"
            onClick={handleFacebookLogin}
          >
            <span id="facebookBtn">
              Continue with Facebook <i className="fa-brands fa-facebook" />
            </span>
          </Link>
          <Link
            to="./homepage"
            className="btn google-btn "
            onClick={handleGoogleLogin}
          >
            <span>
              Continue with Google <i class="fa-brands fa-google" />
            </span>
          </Link>
        </div>
        <br></br>
        <h5 className="form-title">
          <Link to="./SignUp" id="noAccount">
            Don't Have an account ?
          </Link>
        </h5>
      </div>
    </div>
  );
};

export default Login;
