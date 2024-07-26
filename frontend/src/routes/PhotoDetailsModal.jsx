import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';
import { useState } from 'react';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({ toggleModal, photoHeader, getPhotoId, toggleFavorite }) => {
  const [isFavouriteLarge, setIsFavouriteLarge] = useState(false);

  const clickFavButtonLarge = () => {
    setIsFavouriteLarge(prevFavourite => !prevFavourite);
    toggleFavorite(photoHeader.id);
  };

  const isPhotoFavourite = isFavouriteLarge;

  const photos = Object.values(photoHeader.similar_photos);
  console.log('Photos send to PhotoList from PhotoDetailsModal:', photos);

  return (
    < div className="photo-details-modal" >
      <button onClick={toggleModal} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <article className="photo-list__item">
        <PhotoFavButton onClick={clickFavButtonLarge} isFavourite={isPhotoFavourite} />
        <img className="photo-details-modal__image" src={photoHeader.urls.full} />
        <div className="photo-list__user-details">
          <img className="photo-list__user-profile" src={photoHeader.user.profile} />
          <div className="photo-list__user-info">
            <h3>{photoHeader.user.name}</h3>
            <h3 className="photo-list__user-location">{`${photoHeader.location.city}, ${photoHeader.location.country}`}</h3>
          </div>
        </div>
      </article>
      {/* < PhotoListItem photo={photoHeader} getPhotoId={getPhotoId} toggleFavorite={toggleFavorite} /> */}
      <header className="photo-details-modal__header">
        Similar Photos
      </header>
      < PhotoList photos={photos} toggleModal={toggleModal} getPhotoId={getPhotoId} />
    </div >
  )
};

export default PhotoDetailsModal;
