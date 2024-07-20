import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};
// Note: Rendering a single component to build components in isolation
const App = () => {
  const photosArr = [];
  for (let i = 0; i < 3; i++) {
    photosArr.push(<PhotoListItem key={i + 1} photo={sampleDataForPhotoListItem} />)
  }

  return (
    <div className="App">
      {photosArr}
    </div>
  );
};

export default App;
