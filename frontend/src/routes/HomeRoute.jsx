import React from 'react';
import { useState } from 'react';

import '../styles/HomeRoute.scss';

import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const [favorites, setFavorites] = useState([]);

  console.log(favorites);

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

  const isFavoriteInArr = (id) => {
    return favorites.includes(id);
  };

  const isThereAfavorite = () => {
    if (favorites.length >= 0) {
      return true;
    }
    return false;
  };


  // const trackerFavoriteGlobal = () => {
  //   setFavouriteGlobalCounter(prevFavouriteGlobal => !prevFavouriteGlobal);
  // };

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} isThereAfavorite={isThereAfavorite} />
      <PhotoList photos={props.photos} toggleFavorite={toggleFavorite} isFavoriteInArr={isFavoriteInArr} />
    </div>
  );
};

export default HomeRoute;
