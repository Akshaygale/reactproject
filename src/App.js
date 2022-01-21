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
import Fitness from './jsFile/Pages/Fitness';
import Food from './jsFile/Pages/Food';
import Harry from './jsFile/Components/HollywoodMainPage/Harry';
import Pirates from './jsFile/Components/HollywoodMainPage/Pirates';
import Transformer from './jsFile/Components/HollywoodMainPage/Transformer';
import WonderW from './jsFile/Components/HollywoodMainPage/WonderW';
import Wool from './jsFile/Components/HollywoodMainPage/Wool';
import BlackPanther from './jsFile/Components/HollywoodMainPage/BlackPanther';
import Olympus from './jsFile/Components/HollywoodMainPage/Olympus';
import BeautyBeast from './jsFile/Components/HollywoodMainPage/BeautyBeast';
import Bollywood from './jsFile/Pages/Bollywood';
import Ghajini from './jsFile/Components/BollywoodMainPage/Ghajini';
import Tzp from './jsFile/Components/BollywoodMainPage/Tzp';
import Villan from './jsFile/Components/BollywoodMainPage/Villan';
import Gabbar from './jsFile/Components/BollywoodMainPage/Gabbar';
import Brahmastra from './jsFile/Components/BollywoodMainPage/Brahmastra'
import Yoga from './jsFile/Components/FitnessMainPage/Yoga';
import Gym from './jsFile/Components/FitnessMainPage/Gym';
import Diet from './jsFile/Components/FoodMainPage/Diet';
import Nonveg from './jsFile/Components/FoodMainPage/Nonveg';



function App() {
  return (
    <Router>
    <Header/>
    
      <Routes>
        <Route path='' element={<Homepage/>}/>
        <Route path='/home' element={<Homepage/>}/>

        <Route path='/technology' element={<Technology/>}/>
        <Route path='/edgeTechnology' element={<EdgeTechnology/>}/>
        <Route path='/digitalmarketing' element={<DigitalMarketing/>}/>
        <Route path='/iot' element={<Iot/>}/>
        <Route path='/ai' element={<AI/>}/>
        <Route path='/cybersecurity' element={<CyberSecurity/>}/>
        <Route path='/webdevelopment' element={<Webdevelopment/>}/>
        <Route path='/fitness' element={<Fitness/>}/>
        <Route path='/food' element={<Food/>}/>

        <Route path='/hollywood' element={<Hollywood/>}/>
        <Route path='/harry' element={<Harry/>}/>
        <Route path='/pirates' element={<Pirates/>}/>
        <Route path='/transformer' element={<Transformer/>}/>
        <Route path='/wonder' element={<WonderW/>}/>
        <Route path='/wool' element={<Wool/>}/>
        <Route path='blackpanther' element={<BlackPanther/>}/>
        <Route path='olympus' element={<Olympus/>}/>
        <Route path='beautybeast' element={<BeautyBeast/>}/>

        <Route path='/bollywood' element={<Bollywood/>}/>
        <Route path='/ghajini' element={<Ghajini/>}/>
        <Route path='/tzp' element={<Tzp/>}/>
        <Route path='/villan' element={<Villan/>}/>
        <Route path='/gabbar' element={<Gabbar/>}/>
        <Route path='/brahmastra' element={<Brahmastra/>}/>
        <Route path='/yoga' element={<Yoga/>}/>
        <Route path='/gym' element={<Gym/>}/>
        <Route path='/diet' element={<Diet/>}/>
        <Route path='/nonveg' element={<Nonveg/>}/>


      </Routes>
    </Router>
  );
}

export default App;