import React from 'react'
import {Link} from 'react-router-dom'

function BollyMovieEnterList() {
    return (
        <div className='bollyMainpageAllImage'>
        <Link to={"/ghajini"}><img className='bollyMainpageImages' src='./Images/B.ghajini.jpg' alt='bollywoodImage'></img></Link>
        <Link to={"/villan"}><img className='bollyMainpageImages' src='./Images/B.villan.webp' alt='bollywoodImage'></img></Link>
        <Link to={"/tzp"}><img className='bollyMainpageImages' src='./Images/B.tzp.jpg' alt='bollywoodImage'></img></Link>
        <Link to={"/gabbar"}><img className='bollyMainpageImages' src='./Images/B.gabbar.jpg' alt='bollywoodImage'></img></Link>
        <Link to={"/brahmastra"}><img className='bollyMainpageImages' src="./Images/B.brahmastra.jpg" alt="brahamstra" /></Link>
       
        </div>
    )
}

export default BollyMovieEnterList
