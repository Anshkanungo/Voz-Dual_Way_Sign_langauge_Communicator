// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faUsers, faCog } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import Footer from "../Footer/footer";
import { FaUserFriends, FaBookmark, FaGithub, FaVideo } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="base -mt-48 ">
      <nav className="bg-neutral flex justify-between items-center py-2 px-4">
        <Link to="/about-us">
          <div className="text-inactive flex flex-col items-center">
            <FaBookmark className="text-4xl" />
            <br />
            {/* <span className="text-xl font-bold">About</span> */}
          </div>
        </Link>

        <Link to="team">
          <div className="text-inactive flex flex-col items-center">
            <FaUserFriends className="text-4xl" />
            <br />
            {/* <span className="text-xl font-bold">Team</span> */}
          </div>
        </Link>

        <a href="https://www.github.com/">
          <div className="text-inactive flex flex-col items-center">
            <FaGithub className="text-4xl" />
            <br />
            {/* <span className="text-xl font-bold">GitHub</span> */}
          </div>
        </a>

        <Link to="/video-call">
          <div className="text-inactive flex flex-col items-center">
            <FaVideo className="text-4xl" />
            <br />
            {/* <span className="text-xl font-bold">Video call</span> */}
          </div>
        </Link>
      </nav>
      {/* <Footer/> */}
    </div>
  );
};

export default Navbar;
