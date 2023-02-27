import React from "react";

function GameOver({highScore, score, resetGame}) {
  return (
    <div className="game-over">
        <h1>Game Over</h1>  
        <button onClick={resetGame}>Play Again</button>
        <h1>High Score: {highScore}</h1>
        <h1>Score: {score}</h1>
        
        <img src="https://media.tenor.com/voHFmiEPAioAAAAC/failure.gif"
            alt=""/>
    </div>
  );
}

export default GameOver;
