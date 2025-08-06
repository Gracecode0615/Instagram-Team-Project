// import Icons from "./components/Icons";
import InstagramAuth from "./pages/IstagramAuth";
import InstagramMain from './pages/instagram-main.jsx'
import Profile from './pages/instaProfile.jsx'
import IGTV from "./pages/IGTV";
import "./styles/app.scss";
import { Route, Routes } from 'react-router-dom';
import IgLikes from "./pages/IgLikes.jsx"
import PostPage from "./pages/PostPage.jsx";
import PictureShotPage from "./pages/PictureShotPage.jsx";

function App() {
  return (
    <div className="app">
        <Routes>
          <Route path="/login" element={<InstagramAuth/>} />
          <Route path="/main" element={<InstagramMain/>} />
          <Route path="/likes" element={<IgLikes/>}/>
          <Route path="/profile" element={<Profile/>} />
          <Route path="/post" element={<PostPage/>} />
          <Route path="/shots" element={<PictureShotPage/>} />
          <Route path="/igtv" element={<IGTV/>} /> {/* IGTV route */}
        </Routes>
    </div>
  );
}

export default App;
