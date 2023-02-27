import React, { useState } from "react";
import Header from "./Header";
import ImageCard from "./ImageCard";
import GameOver from "./GameOver";
import imagesArr, { shuffleArray } from "./Images";
import GameWon from "./GameWon";

function App() {
  const newArr = imagesArr.map((image) =>
    image.slice(14, image.indexOf("."))// extracting only the name of superhero
  );

  const elementCounts = newArr.reduce(
    (count, item) => (((count[item] = count[item] + 1 || 1), count)),
    {}// getting count of superheroes
  );
  // initial state conditions set
  const [images, setImageCounter] = useState(elementCounts);
  const [gameLost, setGameLost] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  const imageCounter = (superhero) => {
    if(score === newArr.length-1){// winning condition
      setGameWon(true);
      return false;
    }
    if (images[superhero] === 2) {// losing condition
      setGameLost(true);
      return false;
    }

    shuffleArray(imagesArr);// shuffling images after each click
    setHighScore((prevScore) => (prevScore === score) ?prevScore + 1 : prevScore);// count increasing
    setScore((prevScore) => prevScore + 1);// incremeting the score of clicked superhero
    setImageCounter((prevImages) => ({
      ...prevImages,// only incrementing the superhero which has been clicked and others remain same
      [superhero]: prevImages[superhero] + 1,
    }));
  };

  const resetGame = ()=>{
    // shuffle and back to initial conditions
    shuffleArray(imagesArr)
    setGameLost(false);
    setScore(0);
    setImageCounter(elementCounts)
  }

  const displayImages = imagesArr.map((x, index) => {// creating image card of each hero
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
      {gameLost ? (// game lost
        <GameOver highScore={highScore} score={score} resetGame = {resetGame}/>
      ) : gameWon ?(// game won
        <React.Fragment>
          <GameWon/> 
        </React.Fragment>
      ) : (// game resuming
        <React.Fragment>
          <Header score={score} highScore={highScore} />
          <div className="image-container">{displayImages}</div>
        </React.Fragment>
        
      )}
    </div>
  );
}

export default App;
