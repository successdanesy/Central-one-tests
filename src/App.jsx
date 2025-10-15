import './index.css'
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import { Routes, Route } from 'react-router-dom';
import {About} from "./pages/About.jsx";

function App() {
  return (
      <div className={` w-full h-full m-0`}>
        <Header />
          <Routes >
             <Route path={`/`} element={<Home />}/>
             <Route path={`/about-us`} element={<About />}/>
             <Route path={`/`} element={<Home />}/>
             <Route path={`/`} element={<Home />}/>
             <Route path={`/`} element={<Home />}/>
          </Routes>
        <Footer />
      </div>
  )
}

export default App;
