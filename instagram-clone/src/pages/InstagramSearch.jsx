// import Logo from "../components/Logo";
import Footer from "../components/Footer";
// import Button from "../components/Button";
import Header from "../components/Header";
import Search from "../components/Search";
import CatergoryTab from "../components/CatergoryTab";
import GalleryGrid from "../components/GalleryGrid";
import FooterIcon from "../components/FooterIcons";
import '../styles/authpage.scss'


const InstagramSearch = () => {
  return (
   <div className="SearchPage">
      <div className="authHeader">
          <Header/>
      </div>

      <div className="searchInput">
          <Search/>
      </div>

       <div className="catergory">
          <CatergoryTab/>
      </div>

        <div className="gallery">
          <GalleryGrid/>
      </div>

      <FooterIcon />
    

   </div>
   
  )
}

export default InstagramSearch