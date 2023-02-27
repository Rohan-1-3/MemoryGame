import React from "react";

function Header({ score, highScore }) {
  return (
    <div>
      <div className="score-container">
        <div className="score">
          <h1>Score: {score}</h1>
        </div>
        <div className="score">
          <h1>High Score: {highScore}</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
