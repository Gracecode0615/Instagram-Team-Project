// import Icons from "./components/Icons";
import InstagramAuth from "./pages/IstagramAuth";
import InstagramAuth1 from "./pages/InstagramAuth1";
import InstagramSearch from "./pages/InstagramSearch.jsx";
import InstagramMain from './pages/instagram-main.jsx'
import Profile from './pages/instaProfile.jsx'
import IGTV from "./pages/IGTV";
import "./styles/app.scss";
import { Route, Routes } from 'react-router-dom';
import IgLikes from "./pages/IgLikes.jsx"

function App() {
  return (
    <div className="app">
        <Routes>

          <Route path="/" element={<InstagramAuth1/>} />
          <Route path="/login" element={<InstagramAuth/>} />
          <Route path="/main" element={<InstagramMain/>} />
          <Route path="/search" element={<InstagramSearch/>}/>
          <Route path="/likes" element={<IgLikes/>}/>
          <Route path="/profile" element={<Profile/>} />
          <Route path="/igtv" element={<IGTV/>} /> {/* IGTV route */}
        </Routes>
    </div>
  );
}

export default App;
