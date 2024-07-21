import React from 'react';
import "../styles/HomeRoute.scss";
import TopNavigation from './TopNavigationBar';
import PhotoList from './PhotoList';


const HomeRoute = () => {
  return (
    <div>
      <TopNavigation />
      <PhotoList />
    </div>
  );
};

export default HomeRoute;