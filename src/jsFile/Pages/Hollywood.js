import React from 'react'
import TopsShowBolly from '../Components/Bollymovie/TopsShowBolly'
import Advertisement from '../Components/Advertisement'
import HollyPageContent from '../Components/HollywoodMainPage/HollyPageContent'

function Hollywood() {
    return (
        <div>
            <h1 className='hollywoodWord'>Hollywood Movies</h1>
            <div className='redlineHollywood'></div>
            <div className='hollywoodPageContent'>  <HollyPageContent/> </div>
            <div className='BollyWoodPagecontents'>   <TopsShowBolly/>   </div>
            <div className='hollywoodPageADD'>   <Advertisement/>   </div>
        </div>
    )
}

export default Hollywood
