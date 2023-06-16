import React, { useState } from "react";
import './navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItemClickHandler = (section) => {
    setIsOpen(false); // Close the mobile menu when a section is clicked

    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (section === "about") {
      window.scrollTo({ top: window.innerHeight , behavior: "smooth" });
    }
    // else if (section === "skills") {
    //   window.scrollTo({ top: window.innerHeight *2, behavior: "smooth" });
  // }
     else if (section === "projects") {
      window.scrollTo({ top: window.innerHeight * 2, behavior: "smooth" });
    } else if (section === "contact") {
      window.scrollTo({ top: window.innerHeight * 3, behavior: "smooth" });
    } 
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="  ">
      <div className="container flex  w-full h-auto  z-10  fixed bottom-0 left-3 ">
        <span className={`close-btn ${isOpen ? "" : "open"}`} onClick={handleClick}>
          <i className="fa-solid fa-xmark"></i>
        </span>
        <div className="media-icons">
          <span className="a" href={{}} style={{ background: "#3000e9" }} onClick={() => menuItemClickHandler("home")}>
            <i class="fa-solid fa-house"></i>
            <span className="tooltip" style={{ color: "#131313" }}>
              Home
            </span>
          </span>
          <span className="a" href={{}} style={{ background: "#3000e9" }} onClick={() => menuItemClickHandler("about")}>
            <i class="fa-solid fa-user"></i>
            <span className="tooltip" style={{ color: "#131313" }}>
              Abut
            </span>
          </span>
          {/* <span className="a" href={{}} style={{ background: "#3000e9" }} onClick={() => menuItemClickHandler("skills")}>
            <i class="fa-solid fa-rocket"></i>
            <span className="tooltip" style={{ color: "#131313" }}>
              Skills
            </span>
          </span> */}
          <span className="a" href={{}} style={{ background: "#3000e9" }} onClick={() => menuItemClickHandler("projects")}>
            <i class="fa-solid fa-server"></i>
            <span className="tooltip" style={{ color: "#131313" }}>
              Projects
            </span>
          </span>
          <span className="a " href={{}} style={{ background: "#3000e9" }} onClick={() => menuItemClickHandler("contact")}>
            <i class="fa-solid fa-envelope "></i>
            <span className="tooltip" style={{ color: "#131313" }}>
              Contact
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
