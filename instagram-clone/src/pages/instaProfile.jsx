import { useState, useEffect } from 'react';

import '../styles/profile.scss';

import Highlights from '../components/highlights'
import ReelsIcon from '../components/ReelsIcon'
import MentionsIcon from '../components/MentionsIcon'
import SideNavIcon from '../components/SideNavIcon'
import UserDP from '../components/DisplayPics'
import Button from '../components/Button'
import MediaGrid from '../components/MediaGrid'
import FooterIcons from "../components/FooterIcons";

import dp1 from '../assets/dp/dp1.png';
import high1 from '../assets/posts_img/high1.png';
import high2 from '../assets/posts_img/high2.png';
import high3 from '../assets/posts_img/high3.png';
import reel1 from '../assets/posts_img/reel1.png';
import reel2 from '../assets/posts_img/reel2.png';
import reel3 from '../assets/posts_img/reel3.png';
import reel4 from '../assets/posts_img/reel4.png';
import reel6 from '../assets/posts_img/reel6.png';
import reel7 from '../assets/posts_img/reel7.png';
import reel8 from '../assets/posts_img/reel8.png';
import reel9 from '../assets/posts_img/reel9.png';
import vid_reel1 from '../assets/videos/v_reel1.mp4';
import m1 from '../assets/posts_img/m1.png';
import m2 from '../assets/posts_img/m2.png';
import m3 from '../assets/posts_img/m3.png';
import m4 from '../assets/posts_img/m4.png';
import m5 from '../assets/posts_img/m5.jpg';
import m6 from '../assets/posts_img/m6.jpg';

const data = [
    { img: high1, name: 'Friends' },
    { img: high2, name: 'Sport' },
    { img: high3, name: 'Desgin' },
];
const sampleReels = [
  { type: 'image', src: reel1, id: 'r1' },
  { type: 'image', src: reel2, id: 'r2' },
  { type: 'image', src: reel3, id: 'r3' },
  { type: 'image', src: reel4, id: 'r4' },
  { type: 'video', src: vid_reel1, id: 'r5' },
  { type: 'image', src: reel6, id: 'r6' },
  { type: 'image', src: reel7, id: 'r7' },
  { type: 'image', src: reel8, id: 'r8' },
  { type: 'image', src: reel9, id: 'r9' },
];
const sampleMentions = [
  { type: 'image', src: m1, id: 'm1' },
  { type: 'image', src: m2, id: 'm2' },
  { type: 'image', src: m3, id: 'm3' },
  { type: 'image', src: m4, id: 'm4' },
  { type: 'image', src: m5, id: 'm5' },
  { type: 'image', src: m6, id: 'm6' },
];


 function Profile() {
    const [storyData, setStoryData] = useState([]);
    const [activeTab, setActiveTab] = useState('reels');
    const [reels, setReels] = useState([]);
    const [mentions, setMentions] = useState([]);

        useEffect(() => {
            setStoryData(data);
            setReels(sampleReels);
            setMentions(sampleMentions);
        }, []);
    
   return (
     <div className="profile-container">
        <div className="profile-wrap">
                <div className="profile-header">
                    <div className="menu">
                        <div></div>

                        <div>
                            <span>
                                <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 0C5.76878 0 7 1.23122 7 2.75L7.0008 4.26557C7.98699 4.38895 8.75 5.23037 8.75 6.25V9.75C8.75 10.8546 7.85457 11.75 6.75 11.75H2C0.89543 11.75 0 10.8546 0 9.75V6.25C0 5.31809 0.637377 4.53504 1.49998 4.31301L1.5 2.75C1.5 1.23122 2.73122 0 4.25 0ZM4.25 1.2C3.39396 1.2 2.7 1.89396 2.7 2.75L2.699 4.25H5.8V2.75C5.8 1.89396 5.10604 1.2 4.25 1.2Z" fill="#262626"/>
                                </svg>
                            </span>
                            <span>jacob_w</span>
                            <span>
                                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5985 0.151489L6.09853 4.65149L1.59853 0.151489L0.75 1.00002L6.09853 6.34855L11.4471 1.00002L10.5985 0.151489Z" fill="#262626"/>
                                </svg>
                            </span>
                        </div>

                        <div><SideNavIcon /></div>
                    </div>

                    <div className="profile-info">
                        <div className='info1'>
                            <div><UserDP imgSrc={dp1}/></div>
                        
                            <div>
                                <span>54</span>
                                <span>Posts</span>
                            </div>

                            <div>
                                <span>834</span>
                                <span>Followers</span>
                            </div>

                            <div>
                                <span>164</span>
                                <span>Followings</span>
                            </div>
                        </div>

                        <div className='info2'>
                            <p>Jacob West</p>
                            <p>Digital goodies designer @pixsellz 
                                Everything is designed.</p>
                        </div>

                        <div><Button bgc={"transparent"} border={"1.5px solid rgba(228, 223, 223, 1)"} text={"Edit Profile"} color={"#262626"} /></div>

                        <div className="highlights">
                            <Highlights stories={storyData} />
                        </div>
                    </div>
                </div>

                <div className="profile-middle">
                    <div className={`medias ${activeTab === 'reels' ? 'active' : ''}`}
                            onClick={() => setActiveTab('reels')}>
                        <ReelsIcon />
                    </div>

                    <div className={`medias-mentions ${activeTab === 'mentions' ? 'active' : ''}`}
                            onClick={() => setActiveTab('mentions')}>
                        <MentionsIcon />
                    </div>
                </div>

                <div className="profile-img-grid">
                    {activeTab === 'reels' && (
                        <MediaGrid items={reels} />
                    )}
                    {activeTab === 'mentions' && (
                        <MediaGrid items={mentions} />
                    )}
                </div>
        </div>

        <FooterIcons />

     </div>
   );
 }

 export default Profile
