import React from "react";
import "./MatchCard.css";

const MatchCard = ({ match }) => {
  return (
    <div className="match-card">
      <div className="match-card__header">
        <span>{match.points} 💰</span>
      </div>
      <div className="match-card__content">
        <div className="team">
          <img src={match.team1.logo} alt={match.team1.name} />
          <span>{match.team1.abbr}</span>
        </div>
        <div className="match-details">
          <span>{match.date}</span><br></br>
          <span>{match.time}</span>
        </div>
        <div className="team">
          <img src={match.team2.logo} alt={match.team2.name} />
          <span>{match.team2.abbr}</span>
        </div>
      </div>
      <button className="join-game-btn">Join Game</button>
    </div>
  );
};

export default MatchCard;
