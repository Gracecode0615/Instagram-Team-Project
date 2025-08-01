import { useState, useEffect } from 'react';

import '../styles/profile.scss';

import Highlights from '../components/highlights'
import ReelsIcon from '../components/ReelsIcon'
import MentionsIcon from '../components/MentionsIcon'
import SideNavIcon from '../components/SideNavIcon'
import UserDP from '../components/DisplayPics'
import Button from '../components/Button'
import FooterIcons from "../components/FooterIcons";

import dp1 from '../assets/dp/dp1.png';

 function Profile() {
    const [storyData, setStoryData] = useState([]);
    
        useEffect(() => {
        // simulate fetching story data
            const data = [
                { video: 'v1', name: 'New' },
                { video: 'v1', name: 'Friends' },
                { video: 'v1', name: 'Sport' },
                { video: 'v3', name: 'Desgin' },
                { video: 'v2', name: 'John' },
            ];
            setStoryData(data);
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
                <div className="medias"><ReelsIcon /></div>

                <div className="medias-mentions"><MentionsIcon /></div>
            </div>

            <div className="profile-img-grid">
                <div className="reels-img">
                </div>

                <div className="mentions-img">
                </div>
            </div>
       </div>

        <FooterIcons />

     </div>
   );
 }

 export default Profile
