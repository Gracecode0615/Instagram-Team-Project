import React from "react";
import VideoCard from "../components/VideoCard";
import "../styles/IGTV.scss";
import { IoIosArrowBack } from "react-icons/io";
import { FiSearch, FiPlus } from "react-icons/fi";

const videos = [
  {
    image: "/assets/igtv1.png",
    title: "Interview with fashion designer",
    duration: "5.2k Views",

  },
  {
    image: "/assets/igtv2.png",
    title: "Inspirational studio shoot",
    duration: "2.2k Views",

  },
  {
    image: "/assets/igtv3.png",
    title: "Night sky timelapse",
    duration: "10.2k Views",
  },
  {
    image: "/assets/igtv4.png",
    title: "Creative workspace",
    duration: "4.2k Views",
  },
   {
    image: "/assets/igtv4.png",
    title: "Creative workspace",
    duration: "2.1k Views",
  },
   {
    image: "/assets/igtv4.png",
    title: "Creative workspace",
    duration: "8.2k Views",
  },
   {
    image: "/assets/igtv4.png",
    title: "Creative workspace",
    duration: "2.9k Views",
  },
   {
    image: "/assets/igtv4.png",
    title: "Creative workspace",
    duration: "2.0k Views",
  },
   {
    image: "/assets/igtv4.png",
    title: "Creative workspace",
    duration: "2.2k Views",
  },
];

const IGTV = () => (
  <div className="igtv-page">
    <div className="igtv-header-image">
      <img src="/assets/igtv-header-bg.png" alt="IGTV Header" className="igtv-header-bg" />
      <div className="igtv-header-content">
        <button className="back-btn"><IoIosArrowBack /></button>
        <span className="igtv-title">IGTV</span>
        <div className="igtv-header-icons">
          <button className="search-btn"><FiSearch /></button>
          <button className="plus-btn"><FiPlus /></button>
        </div>
      </div>
    </div>
    <div className="igtv-grid">
      {videos.map((video, idx) => (
        <VideoCard key={idx} {...video} />
      ))}
    </div>
  </div>
);

export default IGTV;