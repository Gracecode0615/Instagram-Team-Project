// import Icons from "./components/Icons";
import InstagramAuth from "./pages/IstagramAuth";
import InstagramMain from './pages/instagram-main.jsx'
import IGTV from "./pages/IGTV";
import "./styles/app.scss";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
        <Routes>
          <Route path="/login" element={<InstagramAuth/>} />
          <Route path="/main" element={<InstagramMain/>} />
          <Route path="/igtv" element={<IGTV/>} /> {/* IGTV route */}
        </Routes>
    </div>
  );
}

export default App;
