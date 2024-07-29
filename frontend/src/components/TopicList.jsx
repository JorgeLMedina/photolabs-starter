import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics, setTopic }) => {
  const topicListArr = topics.map(item => <TopicListItem key={item.id} topic={item} setTopic={setTopic} />);

  return (
    <div className="top-nav-bar__topic-list">
      {topicListArr}
    </div>
  );
};

export default TopicList;
