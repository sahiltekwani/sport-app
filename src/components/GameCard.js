import React from "react";
import "./GameCard.css";

const GameCard = ({ match }) => {
  return (
    <div className="game-card">
      <div className="game-info">
        <div className="teams">
          <span className="team">{match.team1}</span>
          <span className="vs">vs</span>
          <span className="team">{match.team2}</span>
        </div>
        <div className="game-time">{match.date} {match.time}</div>
      </div>
      <button className="join-game-btn">JOIN GAME</button>
    </div>
  );
};

export default GameCard;
