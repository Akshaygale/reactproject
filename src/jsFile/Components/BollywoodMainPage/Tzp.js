import React from 'react'
import Clap from '../TechMainPage/Clap'
import BollyMovieEnterList from './BollyMovieEnterList'
import TechUserFace from '../TechMainPage/TechUserFace'

function Tzp() {
    return (
        <div>
            <div className='InfoBoxHollyMovie'>
            <h1>Taare Zameen Par </h1>
            <img className='HollymovieEventMovie' src='./Images/B.tzp.jpg' alt='bollywoodImage'></img>
            <p>Ishaan is criticised by his parents for his poor academic performance and is sent away to a boarding school. Ram, an art teacher, however, realises he has dyslexia and helps him uncover his potential. </p>
            <div className='DetailsMovieHolly'>Rating : 8.4/10</div>
            <div className='DetailsMovieHolly'>Type : Drama/Musical</div>
            <div className='DetailsMovieHolly'>Release : 21 December 2007</div>
            <Clap/>
            </div>
        <TechUserFace/>
            
            <BollyMovieEnterList/>
        </div>
    )
}

export default Tzp
