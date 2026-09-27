import React from "react";
import { Loginstyle } from "../../Styles/Loginstyle";
import { Link } from "react-router-dom";

function Login () {
  return (
    <div style={Loginstyle.body}>
      <div style={Loginstyle.container}>

        <h2 style={Loginstyle.welcome}>
          Welcome Back
        </h2>

        <p style={Loginstyle.para}>
          Sign in to continue to your dashboard
        </p>

        <div style={Loginstyle.email}>
          <label htmlFor="input1" style={Loginstyle.label1}>
            Email Address:
          </label>

          <input
            type="text"
            id="input1"
            style={Loginstyle.inputbx1}
            placeholder="Enter your email address"
          />
        </div>

        <div style={Loginstyle.password}>

          <label htmlFor="input2" style={Loginstyle.label1}>
            Password:
          </label>

          <input
            type="text"
            id="input2"
            style={Loginstyle.inputbx1}
            placeholder="Enter your password"
          />

          <p style={Loginstyle.para1}>
            Password must be at least 6 characters long.
          </p>

          <div style={Loginstyle.para2}>

            <label>
              <input type="checkbox" />
              Remember me for 30 days

              <p style={Loginstyle.forgot}>
                Forgot password?
              </p>
            </label>

          </div>

          <button
            type="submit"
            style={Loginstyle.btn}
          >
            Sign in
          </button>

          <p id="para2">
            New to WebTech Practice?

            <Link
              to="/signup"
              style={Loginstyle.create}
            >
              Create an account
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;