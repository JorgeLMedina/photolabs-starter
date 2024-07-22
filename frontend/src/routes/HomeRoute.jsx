import React from 'react';
import { useState } from 'react';

import '../styles/HomeRoute.scss';

import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const [favoriteGlobalCounter, setFavoriteGlobalCounter] = useState(0);

  console.log(favoriteGlobalCounter);

  // const trackerFavoriteGlobal = () => {
  //   setFavouriteGlobalCounter(prevFavouriteGlobal => !prevFavouriteGlobal);
  // };

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} />
      <PhotoList photos={props.photos} favoriteGlobalCounter={props.favoriteGlobalCounter} setFavoriteGlobalCounter={props.setFavoriteGlobalCounter} />
    </div>
  );
};

export default HomeRoute;
