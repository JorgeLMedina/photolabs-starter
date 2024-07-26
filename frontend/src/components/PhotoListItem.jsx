import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photo, toggleFavorite, setModal, favorites }) => {
  return (
    <article className="photo-list__item">
      <PhotoFavButton toggleFavorite={() => toggleFavorite(photo.id)} isFavourited={favorites.includes(photo.id)} />
      <img onClick={() => setModal(photo)} className="photo-list__image" src={photo.urls.regular} />
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
