import React from 'react'

function TechUserFace() {
    return (
        <div>
        <div className='techbox'>
        <div className='TechUserInfo'>
            <img className='facelogoImage' src='./Images/Facelogo.png' alt='Edge Technology'></img>
            <pre className='userName'>Dmitry Nozhenko<br/>
                Jan 28 2016</pre>
            <div className='UserlogoBox'>
                <i class="fab fa-facebook-square userlogo"></i>
                <i class="fab fa-twitter-square userlogo"></i>
                <i class="fab fa-instagram-square userlogo"></i>
                <i class="fab fa-youtube-square userlogo"></i>
            </div>
        </div>
    </div>
        </div>
    )
}

export default TechUserFace
