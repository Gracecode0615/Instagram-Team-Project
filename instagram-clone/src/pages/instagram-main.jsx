import { useState, useEffect } from 'react';

import '../styles/instagram-main.scss';
import Logo from '../components/Logo'
import CameraIcon from '../components/CameraIcon'
import LoveIcon from "../components/love-icon";
import MsgIcon from "../components/msg-icon";
import Stories from "../components/Stories";
import ShareIcon from "../components/shareIcon";
import SaveIcon from "../components/saveIcon";
import FooterIcons from "../components/FooterIcons";
import ThreeDots from '../components/ThreeDots';

import dp1 from '../assets/dp/dp1.png';
import dp2 from '../assets/dp/dp2.png';
import dp3 from '../assets/dp/dp3.png';
import dp4 from '../assets/dp/dp4.png';
import dp5 from '../assets/dp/dp5.png';
import dp6 from '../assets/dp/dp6.png';
import postimg1 from '../assets/posts_img/post-img1.png';


function InstagramMain() {
    const [storyData, setStoryData] = useState([]);

    useEffect(() => {
    // simulate fetching story data
        const data = [
            { img: dp1, name: 'You', isLive: false, isProfile: false },
            { img: dp3, name: 'Joy', isLive: false, isProfile: false },
            { img: dp4, name: 'Mike', isLive: false, isProfile: false },
            { img: dp5, name: 'Sara', isLive: false, isProfile: false },
            { img: dp6, name: 'John', isLive: false, isProfile: false },
        ];
        setStoryData(data);
    }, []);

    return (
        <>
            <div className='wrapper-im'>

                <div className="scroll-container">
                    <div className="head-icon">
                        <div className='camera-icon'>
                            <CameraIcon />
                        </div>

                        <div><Logo /></div>

                        <div className="icons-right">
                            <div>
                                <svg className='red-dot' width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 8.25C6.20914 8.25 8 6.45914 8 4.25C8 2.04086 6.20914 0.25 4 0.25C1.79086 0.25 0 2.04086 0 4.25C0 6.45914 1.79086 8.25 4 8.25Z" fill="#ED4956"/>
                                </svg>

                                <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.66995 0.646428L7.59733 0.730546C7.37948 1.02416 7.40369 1.44082 7.66995 1.70709L9.462 3.49976L6.5 3.5C2.91015 3.5 0 6.41015 0 10V18.5C0 22.0899 2.91015 25 6.5 25H15.5C19.0899 25 22 22.0899 22 18.5L22.0009 11.3747C21.529 11.5591 21.0254 11.6802 20.5006 11.7275L20.5 18.5C20.5 21.2614 18.2614 23.5 15.5 23.5H6.5C3.73858 23.5 1.5 21.2614 1.5 18.5V10C1.5 7.23858 3.73858 5 6.5 5L14.6427 4.99997C14.7669 4.4655 14.969 3.96093 15.2365 3.49888L12.538 3.49876L14.33 1.70709L14.4027 1.62297C14.6205 1.32936 14.5963 0.912694 14.33 0.646428C14.0372 0.353534 13.5623 0.353534 13.2694 0.646428L11 2.91582L8.73061 0.646428L8.64649 0.57381C8.35288 0.355955 7.93622 0.380161 7.66995 0.646428ZM10.7149 12.2704L5.03803 13.775L4.94141 13.8077C4.60028 13.9495 4.40794 14.3251 4.50522 14.6922C4.61134 15.0925 5.02195 15.3311 5.42234 15.225L10.157 13.97V15.8256L10.163 15.9216C10.2186 16.3606 10.6497 16.6652 11.0923 16.5524L16.9593 15.0568L17.0562 15.025C17.3987 14.8864 17.5946 14.5127 17.5008 14.1447C17.3985 13.7434 16.9901 13.5009 16.5888 13.6032L11.657 14.8604V12.9953L11.6509 12.8988C11.5948 12.4574 11.159 12.1527 10.7149 12.2704Z" fill="#262626"/>
                                </svg>
                            </div>

                            <div><ShareIcon /></div>
                        </div>
                    </div>

                    <div className="stories-div">
                        <Stories stories={storyData} />
                    </div>

                    <div className="post-container">
                        <div className="post-header">
                            <div className="user-info">
                                <img src={dp2} alt="Post 1" />
                                <div className="user-details">
                                    <span>
                                        joshua_l 
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.94911 0L6.18132 0.803456L7.65231 0.793732L8.25454 2.13583L9.49727 2.92292L9.2783 4.37756L9.89821 5.71157L8.92757 6.81691L8.72785 8.2743L7.31371 8.6794L6.35777 9.79747L4.94911 9.37371L3.54044 9.79747L2.5845 8.6794L1.17036 8.2743L0.970641 6.81691L0 5.71157L0.619915 4.37756L0.400947 2.92292L1.64368 2.13583L2.2459 0.793732L3.71689 0.803456L4.94911 0ZM6.25793 3.51871L4.28924 5.60893L3.64029 4.91992C3.48882 4.75911 3.23567 4.75153 3.07486 4.90299C2.91404 5.05446 2.90646 5.30761 3.05793 5.46842L3.99805 6.46659C4.15597 6.63425 4.4225 6.63425 4.58042 6.46659L6.84029 4.06721C6.99175 3.9064 6.98417 3.65325 6.82336 3.50178C6.66254 3.35032 6.40939 3.3579 6.25793 3.51871Z" fill="#3897F0"/>
                                        </svg>
                                    </span>
                                    <span>Tokyo, Japan</span>
                                </div>
                            </div>
                            <div className="more-options">
                                <ThreeDots />
                            </div>
                            </div>
                            <div className="post-image-section">
                                <span>1/3</span>
                                <img src={postimg1} alt="Post 1" />
                            </div>

                            <div className="post-actions">
                                <div className="left-icons">
                                    <LoveIcon />
                                    <MsgIcon />
                                    <ShareIcon />
                                </div>
                                <div className="scroll-dots">
                                    <span className='scroll-dot active'></span>
                                    <span className='scroll-dot'></span>
                                    <span className='scroll-dot'></span>
                                </div>
                                <div className="save-icon"><SaveIcon /></div>
                            
                        </div>
                            
                        <div className='comment'>
                            <div>
                                <span>
                                    <img src={dp6} alt="Post 1" />
                                </span>
                                <span>Liked by <bold>craig_love</bold> and <bold>44,686 others</bold></span>
                            </div>
                            <div>
                                <p><bold>joshua_l</bold> The game in Japan was amazing and I want to share some photos</p>
                            </div>

                            <span>View all 1,234 comments</span>

                            <input type="text" placeholder='Add a comment...' />

                        </div>
                    </div>
                </div>
                
                <FooterIcons />

            </div>
        </>
    )
}

export default InstagramMain
