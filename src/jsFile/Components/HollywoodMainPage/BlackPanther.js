import React from 'react'
import Clap from '../TechMainPage/Clap'
import HollyMovieEnterList from './HollyMovieEnterList'
import TechUserFace from '../TechMainPage/TechUserFace'

function BlackPanther() {
    return (
        <div>
            <div className='InfoBoxHollyMovie'>
            <h1>Marvels Cinematic Universe : Black Panther </h1>
            <img className='HollymovieEventMovie' src='./Images/H.blackpanther.jpg' alt="hollywoodImage"></img>
            <p>After his father's death, T'Challa returns home to Wakanda to inherit his throne. However, a powerful enemy related to his family threatens to attack his nation.</p>
            <div className='DetailsMovieHolly'>Rating : 7.3/10</div>
            <div className='DetailsMovieHolly'>Type : Action/Adventure</div>
            <div className='DetailsMovieHolly'>Release : 16 February 2018</div>
            <Clap/>
            </div>
        <TechUserFace/>

            <HollyMovieEnterList/>
        </div>
    )
}

export default BlackPanther
