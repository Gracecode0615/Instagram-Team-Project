// import Icons from "./components/Icons";
import IgLikes from "./pages/IgLikes";
import InstagramAuth from "./pages/IstagramAuth";
import InstagramMain from './pages/instagram-main.jsx'
import Profile from './pages/instaProfile.jsx'
import "./styles/app.scss";
import { Route, Routes  } from 'react-router-dom';

function App() {
  return (
    <div className="app">
        <Routes>
          <Route path="/login" element={<InstagramAuth/>} />
          <Route path="/main" element={<InstagramMain/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
    </div>
  );
}

export default App;
