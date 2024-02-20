import React, { useState } from "react";
import "./Login.css";
import "./responsive.css";
import "./Button/Button.css";
import name from ".././Assets/Name.svg";
import phone from ".././Assets/phone.svg";
import admin from ".././Assets/admin.svg";
import message from ".././Assets/message.svg";
import mort from ".././Assets/remove.png";

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp((prevState) => !prevState);
  };

  return (
    <div className="set-flux-flex-contained okkkk">
      <div className="container-login-contained">
        <div className={`container ${isSignUp ? "active" : ""}`}>
          <div className="form-container sign-up">
            <form>
              <h1>Create Account</h1>
              <div className="social-icons">
                <a href="#" className="icon">
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in">
            <form>
              <div className="form-heading-flux-content">
                <div className="form-heading">
                  <h2>
                    Get in{" "}
                    <span
                      style={{
                        color: "#FF9700",
                        fontSize: "inherit",
                        fontWeight: "inherit",
                        fontFamily: "inherit",
                      }}
                    >
                      Touch
                    </span>
                  </h2>
                </div>
                <div className="para-touch">
                  <p>
                    Enim tempor eget pharetra facilisis sed maecenas adipiscing.
                    Eu leo molestie vel, ornare non id blandit netus.
                  </p>
                </div>
                <div className="input-imgage-flux">
                  <div className="input-controller ">
                    <label htmlFor="message">User Name</label>
                    <input type="email" placeholder="Name" />
                  </div>
                  <div className="input-img-controller">
                    <img src={name} alt="" />
                  </div>
                </div>
                <div className="input-imgage-flux">
                  <div className="input-controller ">
                    <label htmlFor="message">Email Id</label>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div className="input-img-controller">
                    <img src={message} alt="" />
                  </div>
                </div>
                <div className="input-imgage-flux">
                  <div className="input-controller">
                    <label htmlFor="message">Phone Number</label>
                    <input type="email" placeholder="Phone" />
                  </div>
                  <div className="input-img-controller">
                    <img src={message} alt="" />
                  </div>
                </div>
                <div className="button-contained">
                  {" "}
                  <button>Send</button>
                </div>
                <div className="data-container-flux-wrat">
                  <div className="data-container-full">
                    <div className="phone-image">
                      <img src={phone} alt="" />
                    </div>
                    <div className="content-container-phone-flux">
                      <div className="phone-heading">
                        <p>PHONE</p>
                      </div>
                      <div className="number-heading">
                        <p> 03 5432 1234</p>
                      </div>
                    </div>
                  </div>
                  <div className="data-container-full">
                    <div className="phone-image">
                      <img src={admin} alt="" />
                    </div>
                    <div className="content-container-phone-flux">
                      <div className="phone-heading">
                        <p>EMAIL </p>
                      </div>
                      <div className="number-heading">
                        <p>umarusman@gmail</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all of site features</p>
                <button className="hidden" onClick={toggleForm}>
                  Sign In
                </button>
              </div>
              <div className="toggle-panel toggle-right">
                <div className="img-mokup-contained">
                  <img src={mort} alt="" />
                </div>
                <button className="hidden button-wrap" onClick={toggleForm}>
                  <span className="button-content">
                    <div className="button-sett">
                      {" "}
                      <span class="span-mother">
                        <span>S</span>
                        <span>i</span>
                        <span>g</span>
                        <span>n</span>
                        <span>U</span>
                        <span>p</span>
                      </span>
                      <span class="span-mother2">
                        <span>S</span>
                        <span>i</span>
                        <span>g</span>
                        <span>n</span>
                        <span>U</span>
                        <span>p</span>
                      </span>
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
