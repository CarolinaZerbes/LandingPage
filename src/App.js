import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AboutMe from "./components/AboutMe"
import Paintings from "./components/Paintings"
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header />
        <Routes >
          <Route path="/" element={AboutMe}></Route>
          <Route path="/paintings" element={Paintings}></Route>
          <Route>404 Not found</Route> 
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
