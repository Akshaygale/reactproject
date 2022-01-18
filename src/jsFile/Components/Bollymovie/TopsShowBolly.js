import React from 'react'
import TopBollywoodData from './TopBollywoodData'
import { Link } from 'react-router-dom';


function TopsShowBolly() {
    return (
        <div>
            <div  className='Bollybox'>
                <h1 className='bollyHeading'>Top Bollywood</h1>
                <div className='BollyRedline'/>
                <Link to={"/gabbar"}><img className='Bollyfirstimage' src='./Images/B.gabbar.jpg' alt='bollywoodImage'></img></Link>
                <p className='Bolly_desc'>Pachas Pachas Kos Door Jab Koi Rishvat Leta Hai Toh Sab Kehte Hai Mat Le, Varna … Gabbar Aa Jayega…</p>
            </div>
            <div className='ShowThe_Post  MobileShow'>
                <TopBollywoodData/>  
            </div>
        </div>
    )
}

export default TopsShowBolly
