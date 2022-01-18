import React from 'react'
import Clap from '../TechMainPage/Clap'
import BollyMovieEnterList from './BollyMovieEnterList'
import TechUserFace from '../TechMainPage/TechUserFace'

function Brahmastra() {
    return (
        <div>
            <div className='InfoBoxHollyMovie'>
            <h1>Brahmastra</h1>
            <img className='HollymovieEventMovie' src='./Images/B.brahmastra.jpg' alt='bollywoodImage'></img>
            <p>Brahmāstra Part One: Shiva, also known as Brahmāstra, is an upcoming Indian Hindi-language superhero film written and directed by Ayan Mukerji, and produced by Karan Johar. It stars Amitabh Bachchan, Ranbir Kapoor, Alia Bhatt, Mouni Roy and Nagarjuna Akkineni.</p>
            <div className='DetailsMovieHolly'>Rating : NA</div>
            <div className='DetailsMovieholly'>Type : Drama/Fantasy</div>
            <div className='DetailsMovieHolly'>Release : 2022</div>
            <Clap/>
            </div>
        <TechUserFace/>

            <BollyMovieEnterList/>
        </div>
    )
}

export default Brahmastra
