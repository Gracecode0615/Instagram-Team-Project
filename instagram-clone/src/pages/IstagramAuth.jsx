import LoginField from "../components/LoginFields";
import Logo from "../components/Logo";
import "../styles/authpage.scss";
import Footer from "../components/Footer";

const InstagramAuth = () => {
    return (
        <div className="authPage">
            <Logo/>

            <div className="formContainer">
               <LoginField />
            </div>

            <div className="authFooter">
                 <Footer/>
            </div>
        </div>
    );
}
 
export default InstagramAuth;