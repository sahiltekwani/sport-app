import React, { useState, useEffect } from "react";
import "./Header.css";
import { Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const matches = [
  {
    id: 1,
    team1: "Southampton",
    team2: "Manchester United",
    date: "14 Sep 2024",
  },
  { id: 2, team1: "Manchester City", team2: "Brentford", date: "14 Sep 2024" },
  {
    id: 3,
    team1: "Manchester City",
    team2: "Southampton",
    date: "15 Sep 2024",
  },
  { id: 4, team1: "Southampton", team2: "Brentford", date: "15 Sep 2024" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMatches, setFilteredMatches] = useState(matches);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      const newTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);

      setScrollTimeout(newTimeout);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollTimeout]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

    const audio = new Audio("/search.mp3");
    audio.play();
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);

    const audio = new Audio("/search.mp3");
    audio.play();
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);

    setFilteredMatches(
      matches.filter(
        (match) =>
          match.team1.toLowerCase().includes(value.toLowerCase()) ||
          match.team2.toLowerCase().includes(value.toLowerCase()) ||
          match.date.includes(value)
      )
    );
  };

  return (
    <header className={`header ${isScrolling ? "minimized" : ""}`}>
      <div className="header__left">
        <Avatar
          alt="User"
          src="/static/images/avatar/1.jpg"
          className={isScrolling ? "avatar-minimized" : ""}
        />
        {!isScrolling && <span className="points">50</span>}
      </div>
      <div className="header__right">
        <button
          className={`menu-toggle-btn ${isScrolling ? "menu-minimized" : ""}`}
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <MenuIcon />
        </button>
        {!isScrolling && (
          <button
            className="search-toggle-btn"
            onClick={handleSearchToggle}
            aria-label="Search"
          >
            <SearchIcon />
          </button>
        )}
      </div>

      <nav className={`menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li className="menu-options">
            <a href="#home">Home</a>
          </li>
          <li className="menu-options">
            <a href="#about">About</a>
          </li>
          <li className="menu-options">
            <a href="#services">Services</a>
          </li>
          <li className="menu-options">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div className={`search-bar ${searchOpen ? "open" : ""}`}>
        <input
          type="text"
          placeholder="Search for teams or dates..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {searchQuery && (
        <div className="search-results">
          {filteredMatches.map((match) => (
            <div key={match.id} className="search-result">
              {match.team1} vs {match.team2} on {match.date}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
