import Button from "./Button";
import "../styles/loginFields.scss";

const LoginField = () => {
    return (
        <div className="login">
            <form className="form" action="">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                
                <Button bgc={"#3797EF"} bradius={"5px"}/>
            </form>
        </div>

    );
}
 
export default LoginField;