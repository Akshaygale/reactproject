import React from 'react'
import TechUserFace from './TechUserFace'
import TechnologyList from './TechnologyList'
import Clap from './Clap'

function CyberSecurity() {
    return (
        <div >
        <div className='InfoBox'>
        <img className='TechImage' src='./Images/security2.jpg' alt='Cybersecurity'></img>
        <h1>What is cybersecurity?</h1>
        <p>Cybersecurity is the practice of protecting critical systems and sensitive information from digital attacks. Also known as information technology (IT) security, cybersecurity measures are designed to combat threats against networked systems and applications, whether those threats originate from inside or outside of an organization. </p>
        <h2>Why is cyber security important?</h2>
        <p>Privacy laws such as the GDPR (General Data Protection Regulation) and DPA (Data Protection Act) 2018 can mean significant fines for organisations that suffer cyber security breaches. There are also non-financial costs to be considered, like reputational damage.</p>
        <p>Cyber attacks continue to grow in sophistication, with attackers using an ever-expanding variety of tactics. These include social engineering, malware and ransomware.</p>
        <p>New regulations and reporting requirements make cyber security risk oversight a challenge. The board needs assurance from management that its cyber risk strategies will reduce the risk of attacks and limit financial and operational impacts.</p>
        <Clap/>
        </div>
        <TechUserFace/>
        <TechnologyList/>
    </div>
    )
}

export default CyberSecurity
