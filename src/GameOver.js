import React from "react";

function GameOver({highScore}) {
  return (
    <React.Fragment>
        <h1>High Score: {highScore}</h1>
      <h2>Game Over</h2>
    </React.Fragment>
  );
}

export default GameOver;
