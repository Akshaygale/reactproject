import React from 'react'
import Clap from '../TechMainPage/Clap'
import TechUserFace from '../TechMainPage/TechUserFace'
import HollyMovieEnterList from './HollyMovieEnterList'

function Wool() {
    return (
        <div>
            <div className='InfoBoxHollyMovie'>
            <h1>X-Men Origin : The Wolverine In 3D (2013)</h1>
            <img className='HollymovieEventMovie' src='./Images/H.wool.jpg' alt="hollywoodImage"></img>
            <p>Logan travels to Tokyo to meet Yashida, an old acquaintance who is dying. The situation regresses when Yashida offers to take away his healing abilities, but Logan refuses.</p>
            <div className='DetailsMovieHolly'>Rating : 6.7/10</div>
            <div className='DetailsMovieHolly'>Type : Action/Adventure</div>
            <div className='DetailsMovieHolly'>Release : 26 July 2013</div>
            <Clap/>
            </div>
        <TechUserFace/>

            <HollyMovieEnterList/>
        </div>
    )
}

export default Wool
