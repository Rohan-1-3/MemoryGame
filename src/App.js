import imagesArr from "./Images";

function App() {
  const images = imagesArr.map(x => <img src={x} alt=""/>)
  return (
    <div className="App">
     {images}
    </div>
  );
}

export default App;
