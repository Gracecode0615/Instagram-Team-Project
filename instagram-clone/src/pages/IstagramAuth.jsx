import LoginField from "../components/LoginFields";
import Logo from "../components/Logo";
import "../styles/authpage.scss";
import Footer from "../components/Footer";
import NoAccount from "../components/NoAccount";
import Header from "../components/Header";

const InstagramAuth = () => {
    return (
        <div className="authPage">

            <div className="authHeader">
                <Header/>
            </div>

            <div className="authlogo">
                <Logo/>
            </div>
            

            <div className="formContainer">
               <LoginField />
            </div>

            <div className="authText">
                <div className="orText"><span className="">OR</span></div> 
            </div>

            <div className="noAccount">
                  <NoAccount signUpColor={"#3797EF"}/>
            </div>

           

            <div className="authFooter">
                 <Footer/>
            </div>
        </div>
    );
}
 
export default InstagramAuth;