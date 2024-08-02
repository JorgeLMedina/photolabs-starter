import React from 'react';
import '../styles/HomeRoute.scss';

import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({ photos, topics, favoritesExist, toggleFavorite, setModal, favorites, setTopic, setDarkMode, darkMode }) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} favoritesExist={favoritesExist} setTopic={setTopic} setDarkMode={setDarkMode} darkMode={darkMode} />
      <PhotoList photos={photos} toggleFavorite={toggleFavorite} setModal={setModal} favorites={favorites} />
    </div>
  );
};

export default HomeRoute;
