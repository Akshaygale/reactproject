import React from 'react'
import '../css/headerStyle.css'

import {Link} from 'react-router-dom'

function Header() {
    return (
        <div>
            <div className='heading'>
                <p className='word1'>The</p>
                <p className='word2'>Siren</p>
            </div>
            <div className='navbar'>
                <Link className='navbarWords' to='/home'>Home</Link>
                <Link className='navbarWords' to='/hollywood'>Hollywood</Link>
                <Link className='navbarWords' to='/technology'>Technology</Link>
                <Link className='navbarWords' to=''>Bollywood</Link>
                <Link className='navbarWords' to=''>Fitness</Link>
                <Link className='navbarWords' to=''>Food</Link>
            </div>
            <div className='bars'><i class="fas fa-bars "></i></div>
            <div className='horiLine'/>
        </div>
    )
}

export default Header


