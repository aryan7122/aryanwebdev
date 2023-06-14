import React, { useState } from "react";
import './navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItemClickHandler = (section) => {
        setIsOpen(false); // Close the mobile menu when a section is clicked

        if (section === "home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else if (section === "skills") {
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
        } else if (section === "projects") {
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
                <span className={`close-btn ${isOpen ? "open" : ""}`} onClick={handleClick}>
                    <i className="fa-solid fa-xmark"></i>
                </span>
                <div className="media-icons">
                    <span className="a" href={{}} style={{ background: "#e60023" }} onClick={() => menuItemClickHandler("home")}>
                        <i class="fa-solid fa-house"></i>
                        <span className="tooltip" style={{ color: "#e60023" }}>
                            Home
                        </span>
                    </span>
                    <span className="a" href={{}} style={{ background: "#ff0000" }} onClick={() => menuItemClickHandler("skills")}>
                        <i class="fa-solid fa-code"></i>
                        <span className="tooltip" style={{ color: "#ff0000" }}>
                            Skills
                        </span>
                    </span>
                    <span className="a" href={{}} style={{ background: "#ea4689" }} onClick={() => menuItemClickHandler("projects")}>
                        <i class="fa-solid fa-folder"></i>
                        <span className="tooltip" style={{ color: "#ea4689" }}>
                            Projects
                        </span>
                    </span>
                    <span className="a" href={{}} style={{ background: "#8e36ff" }} onClick={() => menuItemClickHandler("contact")}>
                        <i class="fa-solid fa-envelope"></i>
                        <span className="tooltip" style={{ color: "#8e36ff" }}>
                            Contact
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
