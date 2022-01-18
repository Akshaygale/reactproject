import React from 'react'
import Clap from '../TechMainPage/Clap'
import BollyMovieEnterList from './BollyMovieEnterList'
import TechUserFace from '../TechMainPage/TechUserFace'

function Gabbar() {
    return (
        <div>
            <div className='InfoBoxHollyMovie'>
            <h1>GABBAR </h1>
            <img className='HollymovieEventMovie' src='./Images/B.gabbar.jpg' alt='bollywoodImage'></img>
            <p>The city's administration wrongs Aditya, a commoner. To avenge his tragedy, he disguises himself as a vigilante, Gabbar, and teams up with honest government officers to expose the corrupt.</p>
            <div className='DetailsMovieHolly'>Rating : 7.1/10</div>
            <div className='DetailsMovieHolly'>Type : Action/Drama</div>
            <div className='DetailsMovieHolly'>Release : 1 May 2015</div>
            <Clap/>
            </div>
            <TechUserFace/>

            <BollyMovieEnterList/>
        </div>
    )
}

export default Gabbar
