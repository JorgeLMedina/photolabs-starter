import React from 'react';
import '../styles/HomeRoute.scss';

import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({ photos, topics, favoritesExist, toggleFavorite, setModal, favorites }) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} favoritesExist={favoritesExist} />
      <PhotoList photos={photos} toggleFavorite={toggleFavorite} setModal={setModal} favorites={favorites} />
    </div>
  );
};

export default HomeRoute;
