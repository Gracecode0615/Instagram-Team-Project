import React from "react";
import "../styles/VideoCard.scss";

const VideoCard = ({ image, title, duration }) => (
  <div className="video-card">
    <img src={image} alt={title} className="video-card__image" />
    <div className="video-card__info">
      <span className="video-card__title">{title}</span>
      <span className="video-card__duration">{duration}</span>
    </div>
  </div>
);

export default VideoCard;