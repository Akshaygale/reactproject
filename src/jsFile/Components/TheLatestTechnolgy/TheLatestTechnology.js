import React from 'react'
import TheLatestTechList from './TheLatestTechList'
import { Link } from 'react-router-dom'

// import './css/headerStyle.css'
// import '../css/headerStyle.css'




function TheLatestTechnology() {
    return (
        <div>
        <Link className='Thelatest_Word' to={"/technology"}><h1 >The Latest Technology</h1></Link>
        <div className='Thelatest_wordundeline'/>
            <div className='thelatest'>
                <TheLatestTechList/>
                
            </div>
        </div>
    )
}

export default TheLatestTechnology
