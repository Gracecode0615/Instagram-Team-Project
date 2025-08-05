// import Icons from "./components/Icons";
import IgLikes from "./pages/IgLikes";
import InstagramAuth1 from "./pages/InstagramAuth1.jsx";
import InstagramSearch from "./pages/InstagramSearch.jsx";
import Iglive from "./pages/Iglive.jsx";
import InstagramAuth from "./pages/IstagramAuth";
import InstagramMain from './pages/instagram-main.jsx'
import "./styles/app.scss";
import { Route, Routes  } from 'react-router-dom';

function App() {
  return (
    <div className="app">
        <Routes>

          <Route path="/" element={<InstagramAuth1/>} />
          <Route path="/login" element={<InstagramAuth/>} />
          <Route path="/main" element={<InstagramMain/>} />
          <Route path="/search" element={<InstagramSearch/>} />
          <Route pathe="/likes" element={<IgLikes/>} />
          <Route path="/live" element={<Iglive/>}/>
        </Routes>
    </div>
  );
}

export default App;
