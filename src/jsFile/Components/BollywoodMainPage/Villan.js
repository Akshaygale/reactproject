import React from 'react'
import Clap from '../TechMainPage/Clap'
import BollyMovieEnterList from './BollyMovieEnterList'
import TechUserFace from '../TechMainPage/TechUserFace'

function Villan() {
    return (
        <div>
            <div className='InfoBoxHollyMovie'>
            <h1>Ek-Villan </h1>
            <img className='HollymovieEventMovie' src='./Images/B.villan.webp' alt='bollywoodImage'></img>
            <p>Guru is a gangster whose life changes after he falls in love with Aisha and decides to mend his ways. When Aisha gets murdered by a serial killer, Guru begins to search for the culprit.</p>
            <div className='DetailsMovieHolly'>Rating : 6.5/10</div>
            <div className='DetailsMovieHolly'>Type : Romance/Action</div>
            <div className='DetailsMovieHolly'>Release : 27 June 2014</div>
            <Clap/>
            </div>
        <TechUserFace/>

            <BollyMovieEnterList/>
        </div>
    )
}

export default Villan
