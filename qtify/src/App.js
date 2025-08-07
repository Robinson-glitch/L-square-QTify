import logo from './logo.svg';
import './App.css';
import Album from "./component/Album/Albumpage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
   return (
    <Router>
      <Routes>
        <Route path="/" element={<Album />} />
      </Routes>
    </Router>
  );
}

export default App;
