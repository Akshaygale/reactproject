import React from 'react'

function TechUserFace() {
    return (
        <div>
        <div className='techbox'>
        <div className='TechUserInfo'>
            <img className='facelogoImage' src='./Images/Facelogo.png' alt='userface'></img>
            <pre className='userName'>Joey Willsmith<br/>
                Jan 18 2022</pre>
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
