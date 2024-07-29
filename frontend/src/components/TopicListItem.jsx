import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, setTopic }) => {
  return (
    <div className="topic-list__item" onClick={() => setTopic(topic.id)}>
      {topic.title}
    </div>
  );
};

export default TopicListItem;
