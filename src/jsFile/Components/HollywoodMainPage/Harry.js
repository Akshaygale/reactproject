import React from 'react'
import Clap from '../TechMainPage/Clap'
import HollyMovieEnterList from './HollyMovieEnterList'
import TechUserFace from '../TechMainPage/TechUserFace'
function Harry() {
    return (
        <div>
            <div className='InfoBoxHollyMovie'>
            <h1>Harry Potter</h1>
            <img className='HollymovieEventMovie' src="./Images/H.harrypotter.jpg" alt="harrypotter" />
            <p>Harry Potter is a film series based on the eponymous novels by J. K. Rowling. The series is distributed by Warner Bros. and consists of eight fantasy films, beginning with Harry Potter and the Philosopher's Stone and culminating with Harry Potter and the Deathly Hallows.</p>
            <div className='DetailsMovieHolly'>Rating : 8.3/10</div>
            <div className='DetailsMovieHolly'>Type : Action/Adventure</div>
            <div className='DetailsMovieHolly'>Release : 2001–2011</div>
            <Clap/>
            </div>
        <TechUserFace/>

            <HollyMovieEnterList/>
        </div>
    )
}

export default Harry
