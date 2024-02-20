import React, { useState } from "react";
import "./Sidebar.css";
import "./responsive.css";
import Icon3 from "../Icons/Icon3";
import Icon1 from "../Icons/Icon1";
import Icon12 from "../Icons/Icon12";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [selectedOption, setSelectedOption] = useState("Option1");
  return (
    <div
      className={`sidebar-conatiner transition-all duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="sidebar-left">
        <div className="sidebar-containes-set">
          <div className="image-cross-set" onClick={toggleSidebar}>
            <Icon12 onClick={toggleSidebar} />
          </div>
          <div className="sidebar-frenzon-heading">
            <h2>FRENZONE</h2>
          </div>
          <div className="link-contains">
            <ul>
              <div className="icon-sidebar-set">
                <div
                  className="icon-set-contained-full"
                  onClick={() => setSelectedOption("Option1")}
                >
                  <div className="img-sidebar-set">
                    <Icon3 selected={selectedOption === "Option1"} />
                  </div>
                  <div
                    className={` option-set ${
                      selectedOption === "Option1" ? "selected-option" : ""
                    }`}
                  >
                    Option 1
                  </div>
                  <div className="sidebar-line-img">
                    {selectedOption === "Option1" && <Icon1 />}
                  </div>
                </div>
              </div>
              <div className="icon-sidebar-set">
                <div
                  className="icon-set-contained-full"
                  onClick={() => setSelectedOption("Option2")}
                >
                  <div className="img-sidebar-set">
                    <Icon3 selected={selectedOption === "Option2"} />
                  </div>
                  <div
                    className={` option-set ${
                      selectedOption === "Option2" ? "selected-option" : ""
                    }`}
                  >
                    Option 2
                  </div>
                  <div className="sidebar-line-img">
                    {selectedOption === "Option2" && <Icon1 />}
                  </div>
                </div>
              </div>
              <div className="icon-sidebar-set">
                <div
                  className="icon-set-contained-full"
                  onClick={() => setSelectedOption("Option3")}
                >
                  <div className="img-sidebar-set">
                    <Icon3 selected={selectedOption === "Option3"} />
                  </div>
                  <div
                    className={` option-set ${
                      selectedOption === "Option3" ? "selected-option" : ""
                    }`}
                  >
                    Option 3
                  </div>
                  <div className="sidebar-line-img">
                    {selectedOption === "Option3" && <Icon1 />}
                  </div>
                </div>
              </div>
              <div className="icon-sidebar-set">
                <div
                  className="icon-set-contained-full"
                  onClick={() => setSelectedOption("Option4")}
                >
                  <div className="img-sidebar-set">
                    <Icon3 selected={selectedOption === "Option4"} />
                  </div>
                  <div
                    className={`option-set ${
                      selectedOption === "Option4" ? "selected-option" : ""
                    }`}
                  >
                    Option 4
                  </div>
                  <div className="sidebar-line-img">
                    {selectedOption === "Option4" && <Icon1 />}
                  </div>
                </div>
              </div>
              <div className="icon-sidebar-set">
                <div
                  className="icon-set-contained-full"
                  onClick={() => setSelectedOption("Option5")}
                >
                  <div className="img-sidebar-set">
                    <Icon3 selected={selectedOption === "Option5"} />
                  </div>
                  <div
                    className={`option-set ${
                      selectedOption === "Option5" ? "selected-option" : ""
                    }`}
                  >
                    Option 5
                  </div>
                  <div className="sidebar-line-img">
                    {selectedOption === "Option5" && <Icon1 />}
                  </div>
                </div>
              </div>
              <div className="icon-sidebar-set">
                <div
                  className="icon-set-contained-full"
                  onClick={() => setSelectedOption("Option6")}
                >
                  <div className="img-sidebar-set">
                    <Icon3 selected={selectedOption === "Option6"} />
                  </div>
                  <div
                    className={`option-set ${
                      selectedOption === "Option6" ? "selected-option" : ""
                    }`}
                  >
                    Option 6
                  </div>
                  <div className="sidebar-line-img">
                    {selectedOption === "Option6" && <Icon1 />}
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
