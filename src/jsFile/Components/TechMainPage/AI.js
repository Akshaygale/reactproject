import React from 'react'
import TechUserFace from './TechUserFace'
import TechnologyList from './TechnologyList'
import Clap from './Clap'

function AI() {
    return (
        <div >
            <div className='InfoBox'>
            <img className='MainImage' src='./Images/ai2.jpeg' alt='Edge Technology'></img>
            <h1>WHAT IS ARTIFICIAL INTELLIGENCE?</h1>
            <p>Artificial intelligence (AI) is a wide-ranging branch of computer science concerned with building smart machines capable of performing tasks that typically require human intelligence.</p>
            <h2>How Does Artificial Intelligence Work?</h2>
            <img className='TechImage' src='./Images/ai3.jpeg' alt='Edge Technology'></img>
            <p>Less than a decade after breaking the Nazi encryption machine Enigma and helping the Allied Forces win World War II, mathematician Alan Turing changed history a second time with a simple question: "Can machines think?" </p>
            <p>"AI is a computer system able to perform tasks that ordinarily require human intelligence... Many of these artificial intelligence systems are powered by machine learning, some of them are powered by deep learning and some of them are powered by very boring things like rules."</p>
            <Clap/>
            </div>
            <TechUserFace/>
            <TechnologyList/>
        </div>
    )
}

export default AI
