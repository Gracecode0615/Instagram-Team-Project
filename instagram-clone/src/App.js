// import Icons from "./components/Icons";
import InstagramAuth from "./pages/IstagramAuth";
import InstagramAuth1 from "./pages/InstagramAuth1";
import InstagramSearch from "./pages/InstagramSearch.jsx";
import InstagramMain from './pages/instagram-main.jsx'
import Iglive from './pages/Iglive.jsx'
import Profile from './pages/instaProfile.jsx'
import IGTV from "./pages/IGTV";
import IGTVShow from "./pages/IGTV-Show.jsx";
import "./styles/app.scss";
import { Route, Routes } from 'react-router-dom';
import IgLikes from "./pages/IgLikes.jsx"
import PostPage from "./pages/PostPage.jsx";
import PictureShotPage from "./pages/PictureShotPage.jsx";

function App() {
  return (
    <div className="app">
        <Routes>

          <Route path="/" element={<InstagramAuth1/>} />
          <Route path="/login" element={<InstagramAuth/>} />
          <Route path="/main" element={<InstagramMain/>} />
          <Route path="/search" element={<InstagramSearch/>}/>
          <Route path="/likes" element={<IgLikes/>}/>
          <Route path="/live" element={<Iglive/>}/>
          <Route path="/profile" element={<Profile/>} />
          <Route path="/post" element={<PostPage/>} />
          <Route path="/shots" element={<PictureShotPage/>} />
          <Route path="/igtv" element={<IGTV/>} /> {/* IGTV route */}
          <Route path="/igtvShow" element={<IGTVShow/>} />
        </Routes>
    </div>
  );
}

export default App;
