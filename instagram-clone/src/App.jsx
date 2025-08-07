import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import InstagramAuth1 from './pages/InstagramAuth1';
import IstagramAuth from "./pages/IstagramAuth";
import "./styles/app.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={<InstagramAuth1 />} />
          <Route path='/IstagramAuth' element={<IstagramAuth/>}/>
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
