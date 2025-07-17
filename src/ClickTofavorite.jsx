import React, { useState } from "react";
import ImageCard from "./ImageCard";

const collections = [
  {
    imag: "https://i.pinimg.com/736x/47/84/43/478443ded3fb18d994346a0573940da5.jpg",
    title: "T-Shirt design with illustrated ship",
  },
  {
    imag: "https://i.pinimg.com/736x/5b/81/f7/5b81f7c444fdc838bf3c1cf039100a91.jpg",
    title: "ART ALL SİPİRİTÜEL FASHİON BEAUTY",
  },
  {
    imag: "https://i.pinimg.com/736x/17/c4/06/17c4063708b174b6ba87734ec50d0dd1.jpg",
    title: "Tamil Indian Funny Lungi Dance Sticker",
  },
  {
    imag: "https://i.pinimg.com/736x/1a/5c/18/1a5c18cf370f9f02f55523141f0e04f5.jpg",
    title: "ki dhongra baba",
  },
  {
    imag: "https://i.pinimg.com/736x/ab/2e/02/ab2e02d38192a2998d14bcb815d26293.jpg",
    title: "Bangla Typography - Alakar Borobhai",
  },
  {
    imag: "https://i.pinimg.com/736x/9c/3c/cb/9c3ccb676f3d314e5611ae29b7f00251.jpg",
    title: "Bangla Typography Design and Character art - Suronjit Tanu",
  },
];

function ClickTofavorite() {
  const [favorites, setFavorites] = useState([]);
  const addToFavorites = (item) => {
    if (!favorites.some((fav) => fav.imag === item.imag)) {
      setFavorites([...favorites, item]);
    }
  };

  const removeFromFavorites = (item) => {
    const updated = favorites.filter((fav) => fav.imag !== item.imag);
    setFavorites(updated);
  };

  return (
    <div>
      <h1 className='heading'>Click To Favourite</h1>
      <div className='choose-gallary'>
        {collections.map((item, index) => (
          <ImageCard
            key={index}
            data={item}
            isFavourite={false}
            onClick={() => addToFavorites(item)}
          />
        ))}
      </div>
      <h1 className='favourite-heading'>Add favorite List</h1>
      <div className='favorite'>
        {favorites.map((item, index) => (
          <ImageCard
            key={index}
            data={item}
            isFavourite={true}
            onClick={() => removeFromFavorites(item)}
          />
        ))}
      </div>
    </div>
  );
}

export default ClickTofavorite;
