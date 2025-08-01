import Button from "./Button";
import "../styles/loginFields.scss";
import FbLogin from "./FbLogin";

const LoginField = () => {
    return (
        <div className="login">
            <form className="form" action="">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />

                <span>Forgot Password?</span>

                <Button bgc={"#3797EF"} border={"none"} text={"Login"} color={"#fff"} />
            </form>
            <FbLogin/>
        </div>

    );
}
 
export default LoginField;
