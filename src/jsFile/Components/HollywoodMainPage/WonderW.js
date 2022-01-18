import React from 'react'
import Clap from '../TechMainPage/Clap'
import TechUserFace from '../TechMainPage/TechUserFace'
import HollyMovieEnterList from './HollyMovieEnterList'

function WonderW() {
    return (
        <div>
            <div className='InfoBoxHollyMovie'>
            <h1>DC Entertainment : Wonder Woman (2017)</h1>
            <img className='HollyImage' src='./Images/H.wonder.jpeg' alt="hollywoodImage"></img>
            <p>Sam Witwicky and the Autobots must unravel the secrets of a Cybertronian spacecraft hidden on the Moon before the Decepticons can use it for their own evil schemes.</p>
            <div className='DetailsMovieHolly'>Rating : 7.4/10</div>
            <div className='DetailsMovieHolly'>Type : Action/Adventure</div>
            <div className='DetailsMovieHolly'>Release : 2 June 2017</div>
            <Clap/>
            </div>
        <TechUserFace/>

            <HollyMovieEnterList/>
        </div>
    )
}

export default WonderW
