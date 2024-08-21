import { Component } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Login extends Component {
  state = {
    showPassword: false,
  };

  onShowPassword = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  render() {
    const { showPassword } = this.state;
    return (
      <form className="form-style">
        <label htmlFor="username" className="label-style">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="input-element-style"
          placeholder="Enter your username"
        />
        <label htmlFor="password" className="label-style">
          Password
        </label>
        <div className="password-container">
          <div>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="input-element-style-password"
              placeholder="Enter your password"
            />
          </div>

          <div onClick={this.onShowPassword}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        <div className="stay-loggedin-container">
          <div className="stay-loggedin-checkbox-container">
            <input type="checkbox" id="stay-loggedin" />
            <label className="para-1" htmlFor="stay-loggedin">
              Stay Logged in?
            </label>
          </div>
          <label className="para-1">Forgot Password?</label>
        </div>
        <button type="button" className="button-style">
          Login
        </button>
      </form>
    );
  }
}

export default Login;
