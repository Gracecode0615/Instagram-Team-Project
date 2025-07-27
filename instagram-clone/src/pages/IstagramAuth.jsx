import Button from "../components/Button";
import Logo from "../components/Logo";


const InstagramAuth = () => {
    return (
        <div className="authPage">
            <Logo/>

            <div className="formArea">
                <p>this is the area for login details</p>
                  <Button bgc={"#3797EF"} bradius={"2px"}/>
            </div>
        </div>
    );
}
 
export default InstagramAuth;