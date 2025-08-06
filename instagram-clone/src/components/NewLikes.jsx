import "../styles/newlikes.scss";
import Liking from "./Liking";

//imports to images
import dp from "../assets/like_img/dd.png"
import ph from "../assets/like_img/1.png"





const NewLikes = () => {
  return (

    <div className="containers">
      

       <div className="likes-containers">
        <p className="new-pas">New</p>
        <Liking profilePics={dp} username={"Karennne"} photo={ph} hgt={44} rad={50} />
      </div>

      <div className="likes-containers">
        <p className="new-pas">Today</p>
          <Liking profilePics={dp} username={"Karennne"} photo={ph} hgt={44} rad={50} />
      
      </div>

      <div className="likes-containers">
        <p className="new-pas">This Week</p>
        <Liking profilePics={dp} username={"Karennne"} photo={ph} hgt={44} rad={50} />
        <Liking profilePics={dp} username={"Karennne"} photo={ph} hgt={44} rad={50} />
        <Liking profilePics={dp} username={"Karennne"} photo={ph} hgt={44} rad={50} />
        <Liking profilePics={dp} username={"Karennne"} photo={ph} hgt={44} rad={50} />
      
      
        
      
      </div>

      <div className="likes-containers">
        <p className="new-pas">This Month</p>
      </div>
    </div>
  );
};

export default NewLikes;
