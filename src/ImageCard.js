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
    </div>
  );
}

export default ImageCard;
