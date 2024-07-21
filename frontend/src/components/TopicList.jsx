import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

const TopicList = () => {
  const topicListArr = sampleDataForTopicList.map(item => <TopicListItem key={item.id} topic={item} />);

  return (
    <div className="top-nav-bar__topic-list">
      {topicListArr}
    </div>
  );
};

export default TopicList;
