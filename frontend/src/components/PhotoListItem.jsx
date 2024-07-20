import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <article>
      <img src={props.imageSource} />
      <div className="user-name">
        <img src={props.profile} />
        <h3>{props.username}</h3>
        <h3>{`${props.location.city}, ${props.location.country}`}</h3>
      </div>
    </article>
  );
};

export default PhotoListItem;
