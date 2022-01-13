import React from 'react'
import { Link } from 'react-router-dom';
import EdgeTechnology from '../Components/TechMainPage/EdgeTechnology';
import TechUserFace from '../Components/TechMainPage/TechUserFace';

function Technology() {
    
  

    return (
        <div >
        <div>
        <p className='TechMainPageHeading '> Technology Making Future Better</p>
            
        </div>
            <div className='AllTechImage'>
            <Link to={"/edgeTechnology"}> <img className='TechImage' src='./Images/T.edge.jpeg' alt='Edge Technology'></img> </Link>
            <Link to={"/cybersecurity"}><img className='TechImage' src='./Images/T.security.jpg' alt='Security'></img></Link>
            <Link to={"/iot"}><img className='TechImage' src='./Images/T.iot.jpg' alt='Iot'></img></Link>
            <Link to={"/ai"}><img className='TechImage' src='./Images/Ai tech.jpg' alt='Ai'></img></Link>
            <Link to={'/webdevelopment'}><img className='TechImage' src='./Images/webDev.webp' alt='WebDev'></img></Link>
            <Link to={"/digitalmarketing"}><img className='TechImage'  src="./Images/T.digital.jpg" alt="fisrtImgHome" /></Link>
            </div>
        </div>
    )
}

export default Technology
