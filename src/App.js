import imagesArr, {shuffleArray} from "./Images";
import React, {useState} from "react";

function App() {
  const newArr = imagesArr.map(image => image.slice(14,image.indexOf(".")));

  const elementCounts = newArr.reduce((count, item) => 
              ((count[item] = count[item] + 1 || 1, count)), {});

  const [images, setImageCounter] = useState(elementCounts);
  const [gameStatus, setGameStatus] = useState(false);
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0);
  console.log(images)

  const imageCounter = (some)=>{
    if(images[some] === 2){
      setGameStatus(true)
      setScore(0)
      return false
    }
    shuffleArray(imagesArr)
    setHighScore(highScore+1)
    setScore(score+1)
    setImageCounter(prevImages => ({ ...prevImages, [some]: prevImages[some] + 1 }))
  }

  const displayImages = imagesArr.map((x, index) => {
    return(
      <img src={x} alt="" onClick={()=>imageCounter(x.slice(14,x.indexOf(".")))}
      className={x.slice(14,x.indexOf("."))}
      key={newArr[index]}/>
    )
  })
  if(gameStatus){
    return(
      <div>
      <h1>High Score: {highScore}</h1>
      <h1>Score: {score}</h1>
    Game Over
    </div>
    )
  }else{return (
    <div className="App">
      <h1>High Score: {highScore}</h1>
      <h1>Score: {score}</h1>
      {displayImages}

    </div>
  );}
  
}

export default App;
