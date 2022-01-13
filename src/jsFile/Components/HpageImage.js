import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import '../css/headerStyle.css'


function HpageImage() {

    return (
        <div>
        <Link to={"/hollywood"}> <img className='image1' src="./Images/H.harrypotter.jpg" alt="fisrtImgHome" /></Link>
        <Link to={"/digitalmarketing"}><img className='image2' src="./Images/T.digital.jpg" alt="fisrtImgHome" /></Link>
     <img className='image3' src="./Images/B.brahmastra.jpg" alt="fisrtImgHome" />
    </div>
            
        
    );
}

export default HpageImage
