import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, toggleFavorite, isFavoriteInArr }) => {
  const photosArr = photos.map(item => <PhotoListItem key={item.id} photo={item} toggleFavorite={toggleFavorite} isFavoriteInArr={isFavoriteInArr} />);

  return (
    <ul className="photo-list">
      {photosArr}
    </ul>
  );
};

export default PhotoList;
