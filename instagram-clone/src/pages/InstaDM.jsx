import Footer from "../components/Footer";
import PlusIcon from "../components/PlusIcon";
import CameraIcon from "../components/CameraIcon";
import dm1 from '../assets/dp/dm1.png';
import dm2 from '../assets/dp/dm2.png';
import dm3 from '../assets/dp/dm3.png';
import dm4 from '../assets/dp/dm4.png';
import dm5 from '../assets/dp/dm5.png';
import dp2 from '../assets/dp/dp2.png';
import dp4 from '../assets/dp/dp4.png';
import dp5 from '../assets/dp/dp5.png';
import '../styles/instaDM.scss';

const messages = [
  {
    img: dp2,
    name: "joshua_l",
    text: "Have a nice day, bro!",
    time: "now"
  },
  {
    img: dp5,
    name: "karenne",
    text: "I heard this is a good movie, s...",
    time: "now"
  },
  {
    img: dm1,
    name: "martini_rond",
    text: "See you on the next meeting!",
    time: "15m"
  },
  {
    img: dm2,
    name: "andrewww_",
    text: "Sounds good 😂😂😂",
    time: "20m"
  },
  {
    img: dp4,
    name: "kiero_d",
    text: "The new design looks cool, b…",
    time: "1m"
  },
  {
    img: dm3,
    name: "maxjacobson",
    text: "Thank you, bro!",
    time: "2h"
  },
  {
    img: dm4,
    name: "jamie.franco",
    text: "Yeap, I'm going to travel in To…",
    time: "4h"
  },
  {
    img: dm5,
    name: "m_humphrey",
    text: "Instagram UI is pretty good",
    time: "5h"
  },
];

function DirectMessage() {
    return (
        <div className="dm-container">
            <div className="dm-wrapper">
                <div className="dm-top">
                    <span>
                        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.57712 1.28033C9.87002 0.987437 9.87002 0.512563 9.57712 0.21967C9.28423 -0.0732233 8.80936 -0.0732233 8.51646 0.21967L0.707078 8.02906C0.316554 8.41958 0.316554 9.05275 0.707078 9.44327L8.51646 17.2527C8.80936 17.5455 9.28423 17.5455 9.57712 17.2527C9.87002 16.9598 9.87002 16.4849 9.57712 16.192L2.12129 8.73616L9.57712 1.28033Z" fill="#262626"/>
                        </svg>
                    </span>
                    <span>
                        jacob_w
                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.84853 0.151367L5.34853 4.65137L0.848528 0.151367L0 0.999895L5.34853 6.34842L10.6971 0.999895L9.84853 0.151367Z" fill="#262626"/>
                        </svg>
                    </span>
                    <span><PlusIcon  borderColor={"transparent"} size={"30px"}/></span>
                </div>

                <div>
                    <search>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.75 6C11.75 2.82436 9.17564 0.25 6 0.25C2.82436 0.25 0.25 2.82436 0.25 6C0.25 9.17564 2.82436 11.75 6 11.75C7.31725 11.75 8.53105 11.3071 9.50057 10.562L12.6517 13.7123L12.7358 13.7849C13.0294 14.0028 13.446 13.9786 13.7123 13.7123C14.0052 13.4194 14.0052 12.9445 13.7123 12.6517L10.562 9.50057C11.3071 8.53105 11.75 7.31725 11.75 6ZM1.75 6C1.75 3.65279 3.65279 1.75 6 1.75C8.34721 1.75 10.25 3.65279 10.25 6C10.25 8.34721 8.34721 10.25 6 10.25C3.65279 10.25 1.75 8.34721 1.75 6Z" fill="#3C3C43" fill-opacity="0.6"/>
                        </svg>
                         <input type="text" placeholder="Search" />
                    </search>
                </div>

                <div className="dm-list">
                    <table>
                        <tbody>
                            {messages.map((msg, index) => (
                                <tr key={index}>
                                <td>
                                    <span><img src={msg.img} alt={msg.name} /></span>
                                </td>
                                <td>
                                    <p>{msg.name}</p>
                                    <p>{msg.text}</p>
                                </td>
                                <td>{msg.time}</td>
                                <td><CameraIcon /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="dm-footer">
                <div>
                    <span>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6249 0C14.0378 0 14.4083 0.253804 14.5574 0.638863L15.1276 2.11114C15.2767 2.4962 15.6472 2.75 16.0601 2.75H18C19.3807 2.75 20.5 3.86929 20.5 5.25V16.75C20.5 18.1307 19.3807 19.25 18 19.25H2.5C1.11929 19.25 0 18.1307 0 16.75V5.25C0 3.86929 1.11929 2.75 2.5 2.75H4.4399C4.85283 2.75 5.22329 2.4962 5.37241 2.11114L5.94259 0.638863C6.09171 0.253804 6.46217 0 6.8751 0H13.6249ZM10.25 5.15C7.15721 5.15 4.65 7.65721 4.65 10.75C4.65 13.8428 7.15721 16.35 10.25 16.35C13.3428 16.35 15.85 13.8428 15.85 10.75C15.85 7.65721 13.3428 5.15 10.25 5.15ZM10.25 6.35C12.6801 6.35 14.65 8.31995 14.65 10.75C14.65 13.1801 12.6801 15.15 10.25 15.15C7.81995 15.15 5.85 13.1801 5.85 10.75C5.85 8.31995 7.81995 6.35 10.25 6.35Z" fill="url(#paint0_linear_0_2616)"/>
                            <defs>
                            <linearGradient id="paint0_linear_0_2616" x1="8.87761" y1="-9.97632" x2="-12.4976" y2="12.4999" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#378DEF"/>
                            <stop offset="1" stop-color="#6FC7FC"/>
                            </linearGradient>
                            </defs>
                        </svg>
                    </span>
                    <span> Camera</span>
                </div>
                <Footer border="none" mtop="10px" height="20px" />
            </div>
        </div>
    )
}

export default DirectMessage
