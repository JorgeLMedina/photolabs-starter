// frontend/src/App.jsx
import React from 'react';
import PhotoList from 'components/PhotoList';

// import PhotoListItem from './components/PhotoListItem';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';


const App = () => {
  // const photosArr = Array(3).fill().map((_, i) => <PhotoListItem key={i} photo={sampleDataForPhotoListItem} />);

  return (
    <div className="App">
      {/* {photosArr} */}
      <PhotoList />
    </div>
  );
};

export default App;
