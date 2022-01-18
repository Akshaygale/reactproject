import React from 'react'
import Clap from '../TechMainPage/Clap'
import HollyMovieEnterList from './HollyMovieEnterList'
import TechUserFace from '../TechMainPage/TechUserFace'

function BeautyBeast() {
    return (
        <div>
            <div className='InfoBoxHollyMovie'>
            <h1>Disney Movie : Beauty and the Beast (2017)</h1>
            <img className='HollymovieEventMovie' src='./Images/H.bb.jpg' alt="hollywoodImage"></img>
            <p>Belle, a village girl, embarks on a journey to save her father from a creature that has locked him in his dungeon. Eventually, she learns that the creature is an enchanted prince who has been cursed.</p>
            <div className='DetailsMovieHolly'>Rating : 7.1/10</div>
            <div className='DetailsMovieHolly'>Type : Musical/Romance</div>
            <div className='DetailsMovieHolly'>Release : 23 March 2017</div>
            <Clap/>
            </div>
        <TechUserFace/>

            <HollyMovieEnterList/>
        </div>
    )
}

export default BeautyBeast
