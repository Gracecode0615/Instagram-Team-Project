import { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FiChevronUp } from "react-icons/fi";

import '../styles/IGTVShow.scss';
import LoveIcon from "../components/love-icon";
import MsgIcon from "../components/msg-icon";
import ShareIcon from "../components/shareIcon";
import Footer from "../components/Footer";
import dp1 from '../assets/dp/dp1.png';
import ThreeDots from '../components/ThreeDots';


function IGTVShow({ videos, title }) {
    const [storyData, setStoryData] = useState([]);

    useEffect(() => {
        const data = [
            { videos: 'dp5', title: 'Interviews with leading designers of large companies', name: 'amanda_design', views: 37.256, comment: 373 },
        ];
        setStoryData(data);
    }, []);


  return (
    <div className="igtv-page">
        <div className="igtv-header">
            <div className="igtv-header-left">
                <h2>Interviews with leading designers of large companies</h2>
                <div className="igtv-user-info">
                    <div className="igtv-user-avatar">
                        <img src={dp1} alt="user avatar" />
                    </div>
                    <div className="igtv-user-meta">
                        <div className="igtv-username">amanda_design <span className="follow">· Follow</span></div>
                        <div className="igtv-date">September 13</div>
                    </div>
                </div>
            </div>
            <div className="igtv-header-close">
                <AiOutlineClose size={24} />
            </div>
        </div>

      <div className="igtv-grid">
        {videos && videos.length > 0 ? (
          videos.map((video, index) => (
            <div className="igtv-card" key={index}>
              <video
                className="igtv-thumbnail"
                src={video.src}
                controls={false}
                muted
                preload="metadata"
              />
              <p className="igtv-title">{video.title}</p>
            </div>
          ))
        ) : (
          <div className="no-videos">
            <p>No IGTV videos yet</p>
          </div>
        )}
      </div>

        <div className="igtv-footer">
            <div className="igtv-footer-stats">
                <div className="igtv-stats-text">37,256 views · 373 comments</div>
                <div className="igtv-icons">
                    <LoveIcon fill='#dbdbdb' />
                    <MsgIcon fill='#dbdbdb' />
                    <ShareIcon fill='#dbdbdb' />
                    <ThreeDots fill='#dbdbdb' />
                </div>
            </div>

            <div className="igtv-footer-button">
                <button className="up-next-button"><FiChevronUp size={24} /> <span>Up Next</span></button>
            </div>
        </div>


        <Footer fill='#dbdbdb' border='transparent'/>
    </div>
  );
}

export default IGTVShow;
