// frontend/src/App.jsx
import React from 'react';
import { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  const [modal, setModal] = useState(null);
  const [favorites, setFavorites] = useState([]);

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

  const closeModal = () => setModal(null);

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} toggleFavorite={toggleFavorite} setModal={setModal} favoritesExist={favorites.length > 0} favorites={favorites} />
      {modal && <PhotoDetailsModal photo={modal} toggleFavorite={toggleFavorite} favorites={favorites} closeModal={closeModal} setModal={setModal} photos={photos} />}
    </div>
  );
};

export default App;
