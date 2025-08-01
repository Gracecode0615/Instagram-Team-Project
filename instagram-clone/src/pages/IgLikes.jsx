import Followers from "../components/Followers";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Icons from "../components/Icons";
import NewLikes from "../components/NewLikes";
import "../styles/iglikespage.scss"


const IgLikes = () => {
    return (
        <div className="igLikes">
            <div className="head-area">
                 <Header />
            </div> 

            <div className="follow-area">
                <Followers/>
            </div>

            <div className="new-likes">
                <NewLikes />
            </div>
            
            <div className="today-likes">display today likes</div>
            <div className="week-likes">display likesthis weelk</div>
            <div className="month-likes">this month like</div>
           


            <div className="foot-area">
                <Icons />
                <Footer/>
                </div>
            

        </div>
    );
}
 
export default IgLikes;