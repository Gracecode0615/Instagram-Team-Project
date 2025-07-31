import Logo from "../components/Logo";
import "../styles/authpage.scss";
import Footer from "../components/Footer";
import Button from "../components/Button";
import NoAccount from "../components/NoAccount";
import Header from "../components/Header";
import DisplayPics from "../components/DisplayPics";
import dp from "../assets/dp/dp1.png"

const InstagramAuth1 = () => {
    return (
        <div className="authPage1">

               <div className="authHeader">
                <Header/>
            </div>
            <div className="flex-wrap">
                <div className="authlogo">
                        <Logo/>
                </div>
            
                <div className="Display">
                    <DisplayPics imgSrc={dp} borderColor={"transparent"}/>
                </div>

                <div className="formContainer">
                <Button bgc={"#3797EF"} bradius={"5px"}/>
                </div>

                <div className="authText">
                    <div className="orText"><span className="">OR</span></div> 
                </div>

                <div className="noAccount">     
                    <NoAccount signUpColor={"#3797EF"}/>
                </div>
            
            </div>

           

            <div className="authFooter">
                 <Footer/>
            </div>
        </div>
    );
}
 
export default InstagramAuth1;