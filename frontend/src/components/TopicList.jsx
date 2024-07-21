import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const topics = props.topics;
  const topicListArr = topics.map(item => <TopicListItem key={item.id} topic={item} />);

  return (
    <div className="top-nav-bar__topic-list">
      {topicListArr}
    </div>
  );
};

export default TopicList;
