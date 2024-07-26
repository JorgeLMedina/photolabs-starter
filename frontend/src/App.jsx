// frontend/src/App.jsx
import React from 'react';
import { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  const [modal, setModal] = useState(false);
  const [clickedPhotoId, setClickedPhotoId] = useState({});
  const [favorites, setFavorites] = useState([]);

  ////////////////////////// MODAL useState
  const toggleModal = () => {
    setModal(prev => !prev);
  };

  ////////////////////////// CLICKEDPHOTOID useState
  const getPhotoId = (id) => {
    toggleModal();
    setClickedPhotoId(photos[id - 1]);
  };

  ////////////////////////// FAVORITES useState
  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      // remove ID from array(f)
      const newArr = favorites.filter(item => item !== id);
      setFavorites(newArr);
      return;
    }
    // add ID to array
    const newArr = [...favorites, id]
    setFavorites(newArr);
  };

  // const isFavoriteInArr = (id) => {
  //   return favorites.includes(id);
  // };

  const isFavoriteExist = () => favorites.length > 0;


  // const toggleModalId = (id) => {
  //   setModalId(photos[id - 1]);
  //   console.log(photos[id - 1]);
  // };

  const photoHeaderForModal = { ...clickedPhotoId };

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} toggleModal={toggleModal} getPhotoId={getPhotoId} toggleFavorite={toggleFavorite} isFavoriteExist={isFavoriteExist} />
      {modal && <PhotoDetailsModal toggleModal={toggleModal} photoHeader={photoHeaderForModal} getPhotoId={getPhotoId} toggleFavorite={toggleFavorite} />}
    </div>
  );
};

export default App;
