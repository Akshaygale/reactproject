import React from 'react'
import { Link} from 'react-router-dom';
import '../css/headerStyle.css'


function HpageImage() {

    return (
        <div>
        <Link to={"/hollywood"}> <img className='image1' src="./Images/H.harrypotter.jpg" alt="harrypotter" /></Link>
        <Link to={"/digitalmarketing"}><img className='image2' src="./Images/T.digital.jpg" alt="digial" /></Link>
        <Link to={"/bollywood"}><img className='image3' src="./Images/B.brahmastra.jpg" alt="brahamstra" /></Link>
        </div>
            
        
    );
}

export default HpageImage
