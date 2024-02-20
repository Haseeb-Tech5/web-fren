import React, { useState } from "react";
import "./LoginForm.css";
import "../Button/Button.css";
import name from "../../Assets/Name.svg";
import phone from "../../Assets/phone.svg";
import admin from "../../Assets/admin.svg";
import message from "../../Assets/message.svg";
import mort from "../../Assets/remove.png";
import line from "../../Assets/Line 1.svg";
import logo from "../../Assets/logo.svg";

function LoginForm() {
  const [isSignUpMode, setIsSignUpMode] = useState(true);

  const toggleSignUpMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  return (
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup ">
          <form action="#" className="sign-in-form setting-flex">
            <div className="signin-full-contained-set ">
              <div className="agency-heading">
                <h2>Agency Signup</h2>
              </div>
              <div className="display-fluxx">
                <div className="signin-left-setting">
                  {" "}
                  <div className="input-controller">
                    <label htmlFor="message">Agency Name</label>
                    <input type="email" placeholder="Name" />
                  </div>
                  <div className="input-controller">
                    <label htmlFor="message">Location of Agency : City</label>
                    <input type="email" placeholder="Location" />
                  </div>
                  <div className="input-controller">
                    <label htmlFor="message">
                      Have you ever worked with a social media agency?
                    </label>
                    <input type="email" placeholder="Agency" />
                  </div>{" "}
                  <div className="input-controller">
                    <label htmlFor="message">Current contracts if any</label>
                    <input type="email" placeholder="Contracts" />
                  </div>{" "}
                  <div className="input-controller">
                    <label htmlFor="message">Geographic Area</label>
                    <input type="email" placeholder="Area" />
                  </div>
                </div>
                <div className="signin-right-setting">
                  <div className="input-controller">
                    <label htmlFor="message">Owner Name</label>
                    <input type="email" placeholder="Name" />
                  </div>
                  <div className="input-controller">
                    <label htmlFor="message">Country</label>
                    <input type="email" placeholder="Country" />
                  </div>
                  <div className="input-controller">
                    <label htmlFor="message">
                      If yes please Name the platform
                    </label>
                    <input type="email" placeholder="the platform" />
                  </div>{" "}
                  <div className="input-controller">
                    <label htmlFor="message">Number of influencers</label>
                    <input type="email" placeholder="Influencers" />
                  </div>{" "}
                  <div className="input-controller">
                    <label htmlFor="message">Age Range</label>
                    <input type="email" placeholder="Age" />
                  </div>
                  <div className="input-controller">
                    <label htmlFor="message">Gender</label>
                    <input type="email" placeholder="Gender" />
                  </div>
                  <div className="container-contained-flex-wright">
                    <div className="content">
                      <label className="checkBox">
                        <input id="ch1" type="checkbox" />
                        <div className="transition"></div>
                      </label>
                    </div>
                    <div className="content-para-p">
                      <p>
                        {" "}
                        I understand the privacy policies and terms & Conditions
                      </p>
                    </div>
                  </div>
                  <div className="button-contained btn-set-flex">
                    {" "}
                    <button>Sign Up</button>
                  </div>
                  <div className="all-contained-flex">
                    <div className="line-set-flex line-maxx-set">
                      <img src={line} alt={line} />
                    </div>{" "}
                    <div className="or-heading">
                      <p>OR</p>
                    </div>
                    <div className="line-set-flex line-max-set">
                      <img src={line} alt={line} />
                    </div>{" "}
                  </div>
                  <div className="button-contained1 ">
                    {" "}
                    <button>Login Now</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
          {/* </div>
        <div className="sign-up-setting"> */}
          <form action="#" className="sign-up-form ">
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
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <button className="button-wrap" onClick={toggleSignUpMode}>
              <span className="button-content">
                Sign In
                {/* <div className="button-setttt">
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
                  </div> */}
              </span>
            </button>
          </div>
          {/* <img src="img/log.svg" className="image" alt="" /> */}
        </div>
        <div className="panel right-panel">
          <div className="content">
            <div className="logo-contained-flex">
              <img src={logo} alt="" />
            </div>
            <div className="img-mokup-contained">
              <img src={mort} alt="" />
            </div>
            <div className="btn-controsl">
              <button className="button-wrap" onClick={toggleSignUpMode}>
                <span className="button-content">
                  Sign Up
                  {/* <div className="button-setttt">
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
                  </div> */}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
