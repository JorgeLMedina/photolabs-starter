import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from "mocks/topics";

const TopicList = () => {
  const topicListArr = topics.map(item => <TopicListItem key={item.id} topic={item} />);

  return (
    <div className="top-nav-bar__topic-list">
      {topicListArr}
    </div>
  );
};

export default TopicList;
