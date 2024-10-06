import React from "react";
import "./BottomNav.css";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";

const BottomNav = ({ scrollPosition }) => {
  const isScrolling = scrollPosition > 50;

  return (
    <nav className={`bottom-nav ${isScrolling ? "hidden" : ""}`}>
      <button>
        <SportsSoccerIcon fontSize="large" />
      </button>
      <button>
        <AccountCircleIcon fontSize="large" />
      </button>
      <button>
        <SettingsIcon fontSize="large" />
      </button>
    </nav>
  );
};

export default BottomNav;
