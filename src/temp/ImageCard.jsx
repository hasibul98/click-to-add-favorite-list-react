import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function ImageCard({ data, onClick, isFavourite }) {
  return (
    <div className='card'>
      <div className='image'>
        <img src={data.imag} alt={data.title} />
      </div>
      <div className='title'>{data.title}</div>
      <div className='love-icon' onClick={onClick}>
        <i className='fas fa-heart'></i>
        <span className='addFavourite'>
          {isFavourite ? "remove favourite" : "add favourite"}
        </span>
      </div>
    </div>
  );
}

export default ImageCard;
