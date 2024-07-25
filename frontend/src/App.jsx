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

  const toggleModal = () => setModal(prev => !prev);

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} toggleModal={toggleModal} />
      {modal && <PhotoDetailsModal toggleModal={toggleModal} />}
    </div>
  );
};

export default App;
