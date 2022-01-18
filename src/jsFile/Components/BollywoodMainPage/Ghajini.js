import React from 'react'
import Clap from '../TechMainPage/Clap'
import BollyMovieEnterList from './BollyMovieEnterList'
import TechUserFace from '../TechMainPage/TechUserFace'

function Ghajini() {
    return (
        <div>
            <div className='InfoBoxHollyMovie'>
            <h1>GHAJINI </h1>
            <img className='HollymovieEventMovie' src='./Images/B.ghajini.jpg' alt='bollywoodImage'></img>
            <p>A tycoon, suffering from acute short-term memory loss, cannot remember anything beyond fifteen minutes. With a bunch of polaroids and tattoos on his body, he sets out to find his lover's killer. </p>
            <div className='DetailsMovieHolly'>Rating : 7.4/10</div>
            <div className='DetailsMovieHolly'>Type : Action/Adventure</div>
            <div className='DetailsMovieHolly'>Release : 25 December 2008</div>
            <Clap/>
            </div>
        <TechUserFace/>

            <BollyMovieEnterList/>
        </div>
    )
}

export default Ghajini
