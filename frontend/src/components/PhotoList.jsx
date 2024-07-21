import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

const PhotoList = () => {
  const photosArr = photos.map(item => <PhotoListItem key={item.id} photo={item} />);

  return (
    <ul className="photo-list">
      {photosArr}
    </ul>
  );
};

export default PhotoList;
