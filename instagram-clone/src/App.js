import InstagramAuth from "./pages/IstagramAuth";
import InstagramMain from './pages/instagram-main.jsx'
import "./styles/app.scss";
import { BrowserRouter, Route, Routes, NavLink  } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <InstagramAuth/>
        <Routes>
          <Route path="/main" element={<InstagramMain/>} />
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
