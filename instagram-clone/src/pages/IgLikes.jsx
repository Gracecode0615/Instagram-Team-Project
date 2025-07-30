import Footer from "../components/Footer";
import Header from "../components/Header";
import Icons from "../components/Icons";
import "../styles/iglikespage.scss"

const IgLikes = () => {
    return (
        <div className="igLikes">
            <div className="head-area">
                 <Header />
            </div> 

            <div className="follow-area">
                folling  you
                <p>Follow Requests</p>
            </div>

            <div className="new-likes">display new likes</div>
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