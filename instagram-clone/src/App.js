// import Icons from "./components/Icons";
import IgLikes from "./pages/IgLikes";
import InstagramAuth from "./pages/IstagramAuth";
import InstagramMain from './pages/instagram-main.jsx'
import "./styles/app.scss";
import { Route, Routes, NavLink  } from 'react-router-dom';

function App() {
  return (
    <div className="app">
        <Routes>
          <Route path="/login" element={<InstagramAuth/>} />
          <Route path="/main" element={<InstagramMain/>} />
          <Route path="/likes" element={<IgLikes/>}/>
        </Routes>
    </div>
  );
}

export default App;
