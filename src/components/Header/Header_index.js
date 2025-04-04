// src/components/Header/Header_index.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/long-logo.png";
import "./header_styles.css";
import LanguageIcon from "@mui/icons-material/Language";
import ProfileMenu from "./ProfileMenu";
import MobileSearchBar from "../MobileSearchBar/MobileSearchBar_index";
import SimpleBottomNavigation from "../BottomNavigation/BottomNavigation";
import SearchBar from "../SearchBar/SearchBar";

function Header({ toggleSearch, loggedInUser }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="first-row">
        <div className="column1">
          <Link to="/" className="logo-link">
            <img src={logo} alt="logo" className="navbar-logo" />
          </Link>
        </div>
        <div className="column3">
          <div className="profile-container">
            <div className="airbnb-your-home">Airbnb your home</div>
            <LanguageIcon sx={{ fontSize: "1.3rem" }} />
            <div className="profile">
              {loggedInUser ? <span>Welcome, {loggedInUser}!</span> : <ProfileMenu />}
            </div>
          </div>
        </div>
      </div>
      <div className="second-row">
        <SearchBar isScrolled={isScrolled} toggleSearch={toggleSearch} />
      </div>
      <MobileSearchBar />
      <SimpleBottomNavigation />
    </div>
  );
}

export default Header;
