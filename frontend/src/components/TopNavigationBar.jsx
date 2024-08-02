import React from 'react';

import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import DarkModeButton from './DarkModeButton';

const TopNavigation = ({ topics, favoritesExist, setTopic, setDarkMode, darkMode }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className='top-nav-bar__links'>
        <TopicList topics={topics} setTopic={setTopic} />
        <DarkModeButton setDarkMode={setDarkMode} darkMode={darkMode} />
        <FavBadge favoritesExist={favoritesExist} />
      </div>
    </div>
  )
}

export default TopNavigation;