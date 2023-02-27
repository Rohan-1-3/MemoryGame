import React, { useState } from "react";
import Header from "./Header";
import ImageCard from "./ImageCard";
import GameOver from "./GameOver";
import imagesArr, { shuffleArray } from "./Images";
import GameWon from "./GameWon";

function App() {
  const newArr = imagesArr.map((image) =>
    image.slice(14, image.indexOf("."))
  );

  const elementCounts = newArr.reduce(
    (count, item) => (((count[item] = count[item] + 1 || 1), count)),
    {}
  );

  const [images, setImageCounter] = useState(elementCounts);
  const [gameLost, setGameLost] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  const imageCounter = (superhero) => {
    if(score === newArr.length-1){
      setGameWon(true);
      return false;
    }
    if (images[superhero] === 2) {
      setGameLost(true);
      return false;
    }
    shuffleArray(imagesArr);
    setHighScore((prevScore) => (prevScore === score) ?prevScore + 1 : prevScore);
    setScore((prevScore) => prevScore + 1);
    setImageCounter((prevImages) => ({
      ...prevImages,
      [superhero]: prevImages[superhero] + 1,
    }));
  };

  const resetGame = ()=>{
    shuffleArray(imagesArr)
    setGameLost(false);
    setScore(0);
    setImageCounter(elementCounts)
  }

  const displayImages = imagesArr.map((x, index) => {
    const superhero = newArr[index];
    return (
      <ImageCard
        key={superhero}
        superhero={superhero}
        image={x}
        imageCounter={imageCounter}
      />
    );
  });

  return (
    <div className="container">
      {gameLost ? (
        <GameOver highScore={highScore} score={score} resetGame = {resetGame}/>
      ) : gameWon ?(
        <React.Fragment>
          <GameWon/>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Header score={score} highScore={highScore} />
          <div className="image-container">{displayImages}</div>
        </React.Fragment>
        
      )}
    </div>
  );
}

export default App;
