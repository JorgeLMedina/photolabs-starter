import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, setTopic }) => {
  const handleClick = () => {
    setTopic(topic.id);
  };

  return (
    <div className="topic-list__item" onClick={handleClick}>
      {topic.title}
    </div>
  );
};

export default TopicListItem;
