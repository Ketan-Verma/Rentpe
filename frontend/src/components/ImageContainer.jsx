import React from "react";

const Image = ({ image }) => {
  return (
    <>
      <figure className="image">
        <img src={image} alt="" />
      </figure>
    </>
  );
};

const ImageContainer = ({ images }) => {
  return (
    <div className="image-container">
      {/* <img src={images[0]} alt="" /> */}
      {images.map((img,i) => (
        <Image  key={i} image={img} />
      ))}
    </div>
  );
};

export default ImageContainer;
