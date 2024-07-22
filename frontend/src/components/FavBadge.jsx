import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, isThereAfavorite }) => {
  const selectedConditional = () => {
    isThereAfavorite();
  };

  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={selectedConditional ? true : false} />
    </div>
  )
};

export default FavBadge;