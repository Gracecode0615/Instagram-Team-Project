import "../styles/postpage.scss"
import Icons from "../components/Icons"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Post from "../components/Post"

const PostPage = () => {
    return (
        <div className="post-container">
            <div className="head">
                <Header />
                </div>
            {/* header section  */}
            

           
           
            <div className="post">
                <p>All Posts</p>
                <Post/>
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
 
export default PostPage;