import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const photos = props.photos;
  const photosArr = photos.map(item => <PhotoListItem key={item.id} photo={item} favoriteGlobalCounter={props.favoriteGlobalCounter} setFavoriteGlobalCounter={props.setFavoriteGlobalCounter} />);

  return (
    <ul className="photo-list">
      {photosArr}
    </ul>
  );
};

export default PhotoList;
