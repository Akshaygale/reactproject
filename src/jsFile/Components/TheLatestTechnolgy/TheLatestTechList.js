import React from 'react'
import { Link } from 'react-router-dom'
// import '../css/headerStyle.css'



function TheLatestTechList() {
    return (
        <div className='LatestAllImag'>
            <div className='TheLatestDesc'>
            <Link to={"/edgeTechnology"}><img className='TheLatestDesc_Image' src='./Images/T.edge.jpeg'></img></Link>
                <p className='TheLatestDesc_heading'>Edge computing</p>
                <p className='TheLatestDesc_decrription'>Edge computing is a distributed computing paradigm that brings computation and data storage closer to the sources of data. This is expected to improve response times and save bandwidth. </p>
                {/*<p>Technology</p>
                <p>/ August 21 2017</p>*/}
            </div>
            <div className='TheLatestDesc'>
            <Link to={"/cybersecurity"}><img className='TheLatestDesc_Image' src='./Images/T.security.jpg'></img></Link>
                <p className='TheLatestDesc_heading'>Cyber Security</p>
                <p className='TheLatestDesc_decrription'>A security hacker is someone who explores methods for breaching defenses and exploiting weaknesses in a computer system or network.</p>
                {/*<p>Travel</p>
                <p>/ August 21 2017</p>*/}
            </div>
            <div className='TheLatestDesc'>
            <Link to={"/iot"}><img className='TheLatestDesc_Image' src='./Images/T.iot.jpg'></img></Link>
                <p className='TheLatestDesc_heading'>Internet of things</p>
                <p className='TheLatestDesc_decrription'>The IOT describes physical objects that are embedded with sensors, processing ability, software, and other technologies that connect and exchange data with other devices and systems over the Internet or other communications networks.</p>
                {/*<p>Travel</p>
                <p>/ August 21 2017</p>*/}
            </div>
        </div>
    )
}

export default TheLatestTechList
