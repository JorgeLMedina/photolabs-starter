import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  return (
    <div className="photo-list__fav-icon" onClick={props.onClick}>
      <div className={props.isFavourite ? "photo-list__fav-icon-svg" : ""}>
        <FavIcon />
      </div>
    </div>
  );
}

export default PhotoFavButton;