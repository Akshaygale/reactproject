import React from 'react'
import Clap from '../TechMainPage/Clap'
import HollyMovieEnterList from './HollyMovieEnterList'
import TechUserFace from '../TechMainPage/TechUserFace'

function Pirates() {
    return (
        <div>
            <div className='InfoBoxHollyMovie'>
            <h1>Pirates of the Caribbean: Dead Man's Chest</h1>
            <img className='HollymovieEventMovie' src='./Images/H.pca.jpeg' alt="hollywoodImage"></img>
            <p>Captain Jack Sparrow seeks the heart of Davy Jones, a mythical pirate, in order to avoid being enslaved to him. However, others, including his friends Will and Elizabeth, want it for their own gain.</p>
            <div className='DetailsMovieHolly'>Rating : 7.3/10</div>
            <div className='DetailsMovieHolly'>Type : Action/Adventure</div>
            <div className='DetailsMovieHolly'>Release : 24 June 2006</div>
            <Clap/>
            </div>
        <TechUserFace/>

            <HollyMovieEnterList/>
        </div>
    )
}

export default Pirates
