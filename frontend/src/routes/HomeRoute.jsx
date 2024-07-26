import React from 'react';
import { useState } from 'react';

import '../styles/HomeRoute.scss';

import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} isFavoriteExist={props.isFavoriteExist} />
      <PhotoList photos={props.photos} toggleFavorite={props.toggleFavorite} getPhotoId={props.getPhotoId} />
    </div>
  );
};

export default HomeRoute;
