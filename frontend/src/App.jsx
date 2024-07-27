// frontend/src/App.jsx
import React from 'react';
import { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const { modal, setModal, favorites, toggleFavorite, closeModal } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} toggleFavorite={toggleFavorite} setModal={setModal} favoritesExist={favorites.length > 0} favorites={favorites} />
      {modal && <PhotoDetailsModal photo={modal} toggleFavorite={toggleFavorite} favorites={favorites} closeModal={closeModal} setModal={setModal} photos={photos} />}
    </div>
  );
};

export default App;
