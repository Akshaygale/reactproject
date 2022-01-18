import React from 'react'
import Clap from '../TechMainPage/Clap'
import HollyMovieEnterList from './HollyMovieEnterList'
import TechUserFace from '../TechMainPage/TechUserFace'

function Transformer() {
    return (
        <div>
            <div className='InfoBoxHollyMovie'>
            <h1>The Transformers : Dark of the Moon (2011)</h1>
            <img className='HollymovieEventMovie' src='./Images/H.transformer.jpg' alt="hollywoodImage"></img>
            <p>Sam Witwicky and the Autobots must unravel the secrets of a Cybertronian spacecraft hidden on the Moon before the Decepticons can use it for their own evil schemes.</p>
            <div className='DetailsMovieHolly'>Rating : 6.2/10</div>
            <div className='DetailsMovieHolly'>Type : Action/Sci-fi</div>
            <div className='DetailsMovieHolly'>Release : 29 June 2011</div>
            <Clap/>
            </div>
        <TechUserFace/>

            <HollyMovieEnterList/>
        </div>
    )
}

export default Transformer
