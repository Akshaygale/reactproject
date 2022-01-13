import React from 'react'
import TopBollywoodData from './TopBollywoodData'

function TopsShowBolly() {
    return (
        <div>
            <div  className='Bollybox'>
                <p className='bollyHeading'>Top Bollywood</p>
                <div className='BollyRedline'/>
                <img className='Bollyfirstimage' src='./Images/B.gabbar.jpg' alt='bollywoodImage'></img>
                <p className='Bolly_desc'>Pachas Pachas Kos Door Jab Koi Rishvat Leta Hai Toh Sab Kehte Hai Mat Le, Varna … Gabbar Aa Jayega…</p>

            </div>
            <div className='ShowThe_Post  MobileShow'>
                <TopBollywoodData/>  
            </div>
        </div>
    )
}

export default TopsShowBolly
