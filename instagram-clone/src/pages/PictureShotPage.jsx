import "../styles/picture-shot-page.scss"
import Icons from "../components/Icons"
import Footer from "../components/Footer"
import Header from "../components/Header"
// import Post from "../components/Post"

const PictureShotPage= () => {
    return (
        <div className="shot-container">
            <div className="head">
                <Header bgc={"white"}/>
                </div>
            {/* header section  */}
            

           
           
            <div className="snap-shot">
                <p>All Posts</p>
                {/* <Post/> */}
            </div>
            {/* post section */}

            
            
            <div className="foot">
                <div className="icons">
                    <Icons/>

                </div>
                <div className="foot-line">
                    <Footer />
                </div>
            </div> 
            {/* footer section */}

        </div>
    );
}
 
export default PictureShotPage;