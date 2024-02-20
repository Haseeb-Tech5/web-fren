import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1200);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div style={{ overflow: "hidden", width: "100%", display: "flex" }}>
      <Sidebar
        isOpen={isSmallScreen ? isSidebarOpen : true}
        toggleSidebar={toggleSidebar}
      />
      <div className="rifgt-sidebar">
        <Navbar toggleSidebar={toggleSidebar} />
        <Hero />
      </div>
    </div>
  );
};

export default Home;
