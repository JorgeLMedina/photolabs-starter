import React from 'react';

import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = ({ topics, favoritesExist, setTopic }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} setTopic={setTopic} />
      <FavBadge favoritesExist={favoritesExist} />
    </div>
  )
}

export default TopNavigation;