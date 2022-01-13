// import './App.css';
import Header from './jsFile/Header/Header';
import Homepage from './jsFile/Pages/Homepage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Hollywood from './jsFile/Pages/Hollywood';
import Technology from './jsFile/Pages/Technology';
import EdgeTechnology from './jsFile/Components/TechMainPage/EdgeTechnology';
import DigitalMarketing from './jsFile/Components/TechMainPage/DigitalMarketing';
import Iot from './jsFile/Components/TechMainPage/Iot';
import AI from './jsFile/Components/TechMainPage/AI';
import CyberSecurity from './jsFile/Components/TechMainPage/CyberSecurity';
import Webdevelopment from './jsFile/Components/TechMainPage/Webdevelopment';



function App() {
  return (
    <Router>
    <Header/>
    
      <Routes>
        <Route path='' element={<Homepage/>}/>
        <Route path='/home' element={<Homepage/>}/>
        <Route path='/hollywood' element={<Hollywood/>}/>
        <Route path='/technology' element={<Technology/>}/>
        <Route path='/edgeTechnology' element={<EdgeTechnology/>}/>
        <Route path='/digitalmarketing' element={<DigitalMarketing/>}/>
        <Route path='/iot' element={<Iot/>}/>
        <Route path='/ai' element={<AI/>}/>
        <Route path='/cybersecurity' element={<CyberSecurity/>}/>
        <Route path='/webdevelopment' element={<Webdevelopment/>}/>
      </Routes>
    </Router>
  );
}

export default App;