import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({ photo, toggleFavorite, closeModal, favorites, setModal, photos }) => {
  const similarPhotos = Object.values(photo.similar_photos);

  return (
    < div className="photo-details-modal" >
      <button onClick={closeModal} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <article className="photo-list__item">
        <PhotoFavButton toggleFavorite={() => toggleFavorite(photo.id)} isFavourited={favorites.includes(photo.id)} />
        <img className="photo-details-modal__image" src={photo.urls.full} />
        <div className="photo-list__user-details">
          <img className="photo-list__user-profile" src={photo.user.profile} />
          <div className="photo-list__user-info">
            <h3>{photo.user.name}</h3>
            <h3 className="photo-list__user-location">{`${photo.location.city}, ${photo.location.country}`}</h3>
          </div>
        </div>
      </article>
      <div className="photo-details-modal__header">
        Similar Photos
      </div>
      <PhotoList photos={similarPhotos} toggleFavorite={toggleFavorite} setModal={false} favorites={favorites} />
    </div >
  )
};

export default PhotoDetailsModal;
