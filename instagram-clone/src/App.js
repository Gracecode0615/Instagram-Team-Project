// import Icons from "./components/Icons";
import InstagramAuth from "./pages/IstagramAuth";
import InstagramMain from './pages/instagram-main.jsx'
import Profile from './pages/instaProfile.jsx'
import IGTV from "./pages/IGTV";
import IGTVShow from "./pages/IGTV-Show.jsx";
import AddImage from "./pages/InstaAddImage.jsx";
import ProfileEdit from "./pages/ProfileEdit.jsx";
import DirectMessage from "./pages/InstaDM.jsx";
import "./styles/app.scss";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
        <Routes>
          <Route path="/login" element={<InstagramAuth/>} />
          <Route path="/main" element={<InstagramMain/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/igtv" element={<IGTV/>} /> {/* IGTV route */}
          <Route path="/igtvShow" element={<IGTVShow/>} />
          <Route path="/addimage" element={<AddImage/>} />
          <Route path="/profileEdit" element={<ProfileEdit/>} />
          <Route path="/message" element={<DirectMessage/>} />
        </Routes>
    </div>
  );
}

export default App;
