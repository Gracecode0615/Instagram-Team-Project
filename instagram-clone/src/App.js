// import Icons from "./components/Icons";
import IgLikes from "./pages/IgLikes";
import InstagramAuth from "./pages/IstagramAuth";
import InstagramMain from './pages/instagram-main.jsx'
import "./styles/app.scss";
import { BrowserRouter, Route, Routes, NavLink  } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        
        <Routes>
          <Route path="/login" element={<InstagramAuth/>} />
          <Route path="/main" element={<InstagramMain/>} />
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
