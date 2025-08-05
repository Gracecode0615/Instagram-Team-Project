import "../styles/newlikes.scss";
import Liking from "./Liking";

//imports to images
import dp from "../assets/like_img/dd.png"
import ph from "../assets/like_img/1.png"
import gp from "../assets/like_img/Profiles.png"
import op from "../assets/like_img/Oval.png"
import sp from "../assets/like_img/2.png"
import zp from "../assets/like_img/3.png"
import lp from "../assets/like_img/4.png"
import Follow from "./Follow";





const NewLikes = () => {
  return (

    <div className="containers">
      

       <div className="likes-containers">
        <p className="new-pas">New</p>
        <Liking profilePics={dp} username={"Karennne"} photo={ph} hgt={44} rad={50} />
      </div>

      <div className="likes-containers">
        <p className="new-pas">Today</p>
          <Liking profilePics={gp} username={"Karennne"} photo={ph} hgt={44} rad={50} />
      
      </div>

      <div className="likes-containers">
        <p className="new-pas">This Week</p>
        <Liking profilePics={op} username={"craig_love"} photo={ph} hgt={44} rad={50} />
        <Follow profilePics={sp} username={"Keiro_d, ZackJohn and 26 others "} btn={"Message"} brad={5} pad={5} />
        <Liking profilePics={zp} username={"Maxjacobson"} photo={ph} hgt={44} rad={50} />
        <Liking profilePics={lp} username={"Karennne"} photo={ph} hgt={44} rad={50} />     
      </div>

      <div className="likes-containers">
        <p className="new-pas">This Month</p>
      </div>
    </div>
  );
};

export default NewLikes;
