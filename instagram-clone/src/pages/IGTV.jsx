import React from "react";
import VideoCard from "../components/VideoCard";
import "./IGTV.scss";

const videos = [
  {
    image: "/assets/igtv1.png",
    title: "Interview with fashion designer",
    duration: "6:21",
  },
  {
    image: "/assets/igtv2.png",
    title: "Inspirational studio shoot",
    duration: "5:25",
  },
  {
    image: "/assets/igtv3.png",
    title: "Night sky timelapse",
    duration: "8:14",
  },
  {
    image: "/assets/igtv4.png",
    title: "Creative workspace",
    duration: "4:09",
  },
];

const IGTV = () => (
  <div className="igtv-page">
    <header className="igtv-header">
      <button className="back-btn">&lt;</button>
      <span className="igtv-title">IGTV</span>
      <button className="search-btn">&#128269;</button>
    </header>
    <div className="igtv-banner" />
    <div className="igtv-grid">
      {videos.map((video, idx) => (
        <VideoCard key={idx} {...video} />
      ))}
    </div>
  </div>
);

export default IGTV;