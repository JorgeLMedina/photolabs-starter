import React from 'react';

import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = ({ topics, isFavoriteExist }) => {
  // const selectedConditional = isFavoriteExist();

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />
      <FavBadge isFavPhotoExist={isFavoriteExist()} selectedConditional={isFavoriteExist()} />
    </div>
  )
}

export default TopNavigation;