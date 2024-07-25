import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import { useState } from "react";

const PhotoListItem = ({ photo, toggleFavorite, toggleModal, toggleModalId }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const clickFavButton = () => {
    setIsFavourite(prevFavourite => !prevFavourite);
    toggleFavorite(photo.id);
  };

  const manageModal = (id) => {
    toggleModal();
    toggleModalId(id);
  };

  return (
    <article className="photo-list__item">
      <PhotoFavButton onClick={clickFavButton} isFavourite={isFavourite} />
      <img onClick={() => manageModal(photo.id)} className="photo-list__image" src={photo.urls.regular} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile} />
        <div className="photo-list__user-info">
          <h3>{photo.user.name}</h3>
          <h3 className="photo-list__user-location">{`${photo.location.city}, ${photo.location.country}`}</h3>
        </div>
      </div>
    </article>
  );
};

export default PhotoListItem;
