import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import { useState } from "react";

const PhotoListItem = (props) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const clickFavButton = () => {
    setIsFavourite(prevFavourite => !prevFavourite);
  };

  return (
    <article className="photo-list__item">
      <PhotoFavButton onClick={clickFavButton} isFavourite={isFavourite} />
      <img className="photo-list__image" src={props.photo.urls.regular} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.photo.user.profile} />
        <div className="photo-list__user-info">
          <h3>{props.photo.user.name}</h3>
          <h3 className="photo-list__user-location">{`${props.photo.location.city}, ${props.photo.location.country}`}</h3>
        </div>
      </div>
    </article>
  );
};

export default PhotoListItem;
