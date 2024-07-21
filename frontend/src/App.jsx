// frontend/src/App.jsx
import React from 'react';
import PhotoList from 'components/PhotoList';
import './App.scss';
import TopicList from 'components/TopicList';
import TopicListItem from 'components/TopicListItem';


const App = () => {
  // const photosArr = Array(3).fill().map((_, i) => <PhotoListItem key={i} photo={sampleDataForPhotoListItem} />);

  return (
    <div className="App">
      {/* {photosArr} */}
      <TopicList />
      <PhotoList />
    </div>
  );
};

export default App;
