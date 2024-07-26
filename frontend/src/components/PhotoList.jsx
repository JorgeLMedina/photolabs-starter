import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

console.log()
const PhotoList = ({ photos, toggleFavorite, getPhotoId }) => {
  // if (!modalPicture) {
  const photosArr = photos.map(item => <PhotoListItem key={item.id} photo={item} toggleFavorite={toggleFavorite} getPhotoId={getPhotoId} />);


  // const photosModalArr = [];
  // if (modalPicture) {
  //   for (const item in modalPicture.similar_photos) {
  //     photosModalArr.push(<PhotoListItem key={item.id} photo={item} toggleFavorite={toggleFavorite} toggleModal={toggleModal} toggleModalId={toggleModalId} />)
  //   }
  // }

  return (
    <ul className="photo-list">
      {photosArr}
    </ul>
  );
}

export default PhotoList;
