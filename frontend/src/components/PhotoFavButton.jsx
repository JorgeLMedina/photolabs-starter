import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const clickFavButton = () => console.log('Favorites button clicked!');

  return (
    <div className="photo-list__fav-icon" onClick={clickFavButton}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon />
      </div>
    </div>
  );
}

export default PhotoFavButton;