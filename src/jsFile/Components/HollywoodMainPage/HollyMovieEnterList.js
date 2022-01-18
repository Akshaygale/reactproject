import React from 'react'
import {Link} from 'react-router-dom'

function HollyMovieEnterList() {
    return (
        <div>
        <div className='hollyMainpageAllImage'>
        <Link to={'/harry'}><img className='hollyMainpageImages' src="./Images/H.harrypotter.jpg" alt="harrypotter" /></Link>
        <Link to={'/olympus'}><img className='hollyMainpageImages' src='./Images/H.olympus.jpg' alt="hollywoodImage"></img></Link>
        <Link to={'/beautybeast'}><img className='hollyMainpageImages' src='./Images/H.bb.jpg' alt="hollywoodImage"></img></Link>
        <Link to={'/transformer'}><img className='hollyMainpageImages' src='./Images/H.transformer.jpg' alt="hollywoodImage"></img></Link>
        <Link to={'/wool'}><img className='hollyMainpageImages' src='./Images/H.wool.jpg' alt="hollywoodImage"></img></Link>
        <Link to={'/blackpanther'}><img className='hollyMainpageImages' src='./Images/H.blackpanther.jpg' alt="hollywoodImage"></img></Link>
        <Link to={'/pirates'}><img className='hollyMainpageImages' src='./Images/H.pca.jpeg' alt="hollywoodImage"></img></Link>
        <Link to={'/wonder'}><img className='hollyMainpageImages' src='./Images/H.wonder.jpeg' alt="hollywoodImage"></img></Link>
    </div>
        </div>
    )
}

export default HollyMovieEnterList
