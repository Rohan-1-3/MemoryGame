import React from "react";

function Header({ score, highScore }) {
  return (
    <header>
      <h1>Superhero Memory Game</h1>
      <div className="score-container">
        <div className="score">
          <span>Score: {score}</span>
        </div>
        <div className="score">
          <span>High Score: {highScore}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
