import React from 'react'
import { Link} from 'react-router-dom';
import '../css/headerStyle.css'


function HpageImage() {

    return (
        <div>
        <Link to={"/harry"}> <img className='image1' src="./Images/H.harrypotter.jpg" alt="harrypotter" /></Link>
        <Link to={"/digitalmarketing"}><img className='image2' src="./Images/T.digital.jpg" alt="digial" /></Link>
        <Link to={"/diet"}><img className='image3' src="./Images/diet3.jpg" alt="brahamstra" /></Link>
        </div>
            
        
    );
}

export default HpageImage
