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

  const toggleModal = () => {
    setModal(prev => !prev);
  };

  const [modalId, setModalId] = useState({});

  const toggleModalId = (id) => {
    setModalId(photos[id - 1]);
    console.log(photos[id - 1]);
  };

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} toggleModal={toggleModal} toggleModalId={toggleModalId} />
      {modal && <PhotoDetailsModal toggleModal={toggleModal} modalPicture={modalId} />}
    </div>
  );
};

export default App;
