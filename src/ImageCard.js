import React from "react";

function ImageCard({ superhero, image, imageCounter }) {
  return (
    <div className="image-card">
      <img
        src={image}
        alt=""
        onClick={() => imageCounter(superhero)}
        className={superhero}
      />
      <h2>{superhero.toUpperCase()}</h2>
    </div>
  );
}

export default ImageCard;
