import "../styles/picture-shot-page.scss"
import Icons from "../components/Icons"
// import Footer from "../components/Footer"
// import Header from "../components/Header"
import WhiteHeader from "../components/WhiteHeader"
import SnapShot from "../components/SnapShot"
import EFooter from "../components/EFooter"
// import Post from "../components/Post"

const PictureShotPage= () => {
    return (
        <div className="shot-container">
            <div className="head">
                <WhiteHeader/>
                </div>
            {/* header section  */}
            

           
           
            <div className="snap-shot">
                <SnapShot/>
            </div>
            {/* snap shot section */}

            
            
            <div className="foot">
                <div className="icons">
                    <Icons/>

                </div>
                <div className="foot-line">
                    <EFooter fill={"white"} />
                </div>
            </div> 
            {/* footer section */}

        </div>
    );
}
 
export default PictureShotPage;