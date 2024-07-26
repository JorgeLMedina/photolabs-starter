import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

console.log()
const PhotoList = ({ photos, toggleFavorite, setModal, favorites }) => {
  const photosArr = photos.map(item => <PhotoListItem key={item.id} photo={item} toggleFavorite={toggleFavorite} setModal={setModal} favorites={favorites} />);

  return (
    <ul className="photo-list">
      {photosArr}
    </ul>
  );
}

export default PhotoList;
