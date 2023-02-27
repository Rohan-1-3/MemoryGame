import React, { useState } from "react";
import Header from "./Header";
import ImageCard from "./ImageCard";
import GameOver from "./GameOver";
import imagesArr, { shuffleArray } from "./Images";

function App() {
  const newArr = imagesArr.map((image) =>
    image.slice(14, image.indexOf("."))
  );

  const elementCounts = newArr.reduce(
    (count, item) => (((count[item] = count[item] + 1 || 1), count)),
    {}
  );

  const [images, setImageCounter] = useState(elementCounts);
  const [gameStatus, setGameStatus] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const imageCounter = (superhero) => {
    if (images[superhero] === 2) {
      setGameStatus(true);
      setScore(0);
      return false;
    }
    shuffleArray(imagesArr);
    setHighScore((prevScore) => prevScore + 1);
    setScore((prevScore) => prevScore + 1);
    setImageCounter((prevImages) => ({
      ...prevImages,
      [superhero]: prevImages[superhero] + 1,
    }));
  };

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
      {gameStatus ? (
        <GameOver highScore={highScore} />
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
