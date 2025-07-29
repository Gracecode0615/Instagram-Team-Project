// import Icons from "./components/Icons";
import IgLikes from "./pages/IgLikes";
import InstagramAuth from "./pages/IstagramAuth";
import "./styles/app.scss";
import {Routes, Route} from "react-router"

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/login" element ={<InstagramAuth/>}></Route>
        <Route path="/likes" element={<IgLikes/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
