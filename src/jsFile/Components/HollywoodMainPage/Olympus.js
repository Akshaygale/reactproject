import React from 'react'
import Clap from '../TechMainPage/Clap'
import TechUserFace from '../TechMainPage/TechUserFace'
import HollyMovieEnterList from './HollyMovieEnterList'


function Olympus() {
    return (
        <div>
            <div className='InfoBoxHollyMovie'>
            <h1>Olympus Sequence : The London Has Fallen</h1>
            <img className='HollymovieEventMovie' src='./Images/H.olympus.jpg' alt="hollywoodImage"></img>
            <p>Mike, a Secret Service agent, must find a way to escape with his team when Barkawi, a terrorist, attacks all the world leaders attending the funeral of the British Prime Minister, James Wilson</p>
            <div className='DetailsMovieHolly'>Rating : 6.5/10</div>
            <div className='DetailsMovieHolly'>Type : Action/Thriller</div>
            <div className='DetailsMovieHolly'>Release : 3 March 2016</div>
            <Clap/>
            </div>
        <TechUserFace/>

            <HollyMovieEnterList/>
        </div>
    )
}

export default Olympus
