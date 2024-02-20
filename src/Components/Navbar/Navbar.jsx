import React from "react";
import "./Navbar.css";
import "./responsive.css";
import Icon11 from "../../Icons/Icon11";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="navbar-container">
      <div className="navbar-settings">
        <div className="navbar-sett-flux-flex">
          <div className="heading-sidebar-conatiner">
            {" "}
            <h2>hello</h2>
          </div>
          <div className="input-cross-set-anit">
            <input
              placeholder="Search"
              type="text"
              className="input-sett"
              required=""
            />
            <div className="cross-animat-set">
              <label class="hamburger" onClick={toggleSidebar}>
                <input type="checkbox" />
                <svg viewBox="0 0 32 32">
                  <path
                    className="line line-top-bottom"
                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                  ></path>
                  <path className="line" d="M7 16 27 16"></path>
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
