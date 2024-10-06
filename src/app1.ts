import React from "react";
import Header from "./components/Header";
import MatchCard from "./components/MatchCard";
import DateDivider from "./components/DateDivider";
import BottomNav from "./components/BottomNav";
import "./App.css";

const matches = [
  {
    points: 2100,
    date: "14 Sep 2024",
    time: "17:00",
    team1: {
      name: "Southampton",
      abbr: "SOU",
      logo: "https://upload.wikimedia.org/wikipedia/en/c/c9/FC_Southampton.svg",
    },
    team2: {
      name: "Manchester United",
      abbr: "MUN",
      logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
    },
  },
  {
    points: 2100,
    date: "14 Sep 2024",
    time: "19:30",
    team1: {
      name: "Manchester City",
      abbr: "MCI",
      logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
    },
    team2: {
      name: "Brentford",
      abbr: "BRE",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/2a/Brentford_FC_crest.svg",
    },
  },
  
];
const matches1 = [
  {
    points: 2100,
    date: "15 Sep 2024",
    time: "12:30",
    team1: {
      name: "Manchester City",
      abbr: "MCI",
      logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
    },
    team2: {
      name: "Southampton",
      abbr: "SOU",
      logo: "https://upload.wikimedia.org/wikipedia/en/c/c9/FC_Southampton.svg",
    },
  },
  {
    points: 2100,
    date: "15 Sep 2024",
    time: "19:30",
    team1: {
      name: "Southampton",
      abbr: "SOU",
      logo: "https://upload.wikimedia.org/wikipedia/en/c/c9/FC_Southampton.svg",
    },
    team2: {
      name: "Brentford",
      abbr: "BRE",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/2a/Brentford_FC_crest.svg",
    },
  },
]

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <DateDivider date="14 Sep 2024" />
        {matches.map((match, index) => (
          <MatchCard key={index} match={match} />
        ))}
        <DateDivider date="15 Sep 2024" />
        {matches1.map((match, index) => (
          <MatchCard key={index} match={match} />
        ))}
      </div>
      <BottomNav />
    </div>
  );
};

export default App;
