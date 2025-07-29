import InstagramAuth from "./pages/IstagramAuth";
import InstagramMain from './pages/instagram-main.jsx'
import "./styles/app.scss";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Route>
          <Routes path="/" element={<InstagramAuth/>} />
          <Routes path="/home" element={<InstagramMain/>} />
        </Route>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
