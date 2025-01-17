// frontend/src/App.jsx
import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const { state, setModal, toggleFavorite, closeModal, setTopic } = useApplicationData();
  const modal = state.modal;
  const favorites = state.favorites;
  const photos = state.photoData;
  const topics = state.topicData;

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} toggleFavorite={toggleFavorite} setModal={setModal} favoritesExist={favorites.length > 0} favorites={favorites} setTopic={setTopic} />
      {modal && <PhotoDetailsModal photo={modal} toggleFavorite={toggleFavorite} favorites={favorites} closeModal={closeModal} setModal={setModal} photos={photos} />}
    </div>
  );
};

export default App;
