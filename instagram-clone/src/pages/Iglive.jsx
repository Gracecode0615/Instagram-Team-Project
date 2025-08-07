import "../styles/authpage.scss";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Iglive = () => {
    return (
        <div className="authPage live" >

               <div className="authHeader">
                <Header  />
            </div>
            <div className="flex-wrap">
          
            

                {/* <div className="formContainer">
                <Button bgc={"#3797EF"} bradius={"5px"}/>
                </div> */}

        
            </div>

       

            <div className="authFooter">
                 <Footer/>
            </div>
        </div>
    );
}
 
export default Iglive;