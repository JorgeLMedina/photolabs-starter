// frontend/src/App.jsx
import React from 'react';
import PhotoList from 'components/PhotoList';
import './App.scss';
import TopNavigation from 'components/TopNavigationBar';


const App = () => {
  // const photosArr = Array(3).fill().map((_, i) => <PhotoListItem key={i} photo={sampleDataForPhotoListItem} />);

  return (
    <div className="App">
      {/* {photosArr} */}
      <TopNavigation />
      <PhotoList />
    </div>
  );
};

export default App;
