import React from 'react'
import TechUserFace from './TechUserFace'
import TechnologyList from './TechnologyList'
import Clap from './Clap'

function Webdevelopment() {
    return (
        <div >
            <div className='InfoBox'>
            <img className='MainImage' src='./Images/webdev2.png' alt='Edge Technology'></img>
            <h1>Web Development</h1>
            <p>Web development refers to the building, creating, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.</p>
            <img className='TechImage' src='./Images/frontend.jpg' alt='Edge Technology'></img>
            <p>Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.</p>
            <Clap/>
            </div>
            <TechUserFace/>
            <TechnologyList/>
        </div>
    
    )
}

export default Webdevelopment
