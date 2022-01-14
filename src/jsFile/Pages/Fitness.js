import React from 'react'
import HealthShow from '../Components/TipsUpdate/HealthShow'

function Fitness() {
    return (
        <div>
        <img className='fitnessfirstImage' src='./Images/food.jpg' alt='fitness'></img>

        <img className='FitnessImage' src='./Images/fitness2.jpg' alt="fitnessImage"></img>
        <p className='FitnessMAinHeading'>What Is Yoga?</p>
        <p className='fitnessDesc'>A Hindu Spiritual And Ascetic Discipline, A Part Of Which, Including Breath Control, Simple Meditation, And The Adoption Of Specific Bodily Postures, Is Widely Practised For Health And Relaxation.</p>
        <h1 className='benifit'>Benifits</h1>    
        <p className='benidesc'>The health benefits of yoga are grouped under 3 heads</p>
        <p className='benifitHeading'>Physiological Benefits Of Yoga</p>
        <div>
            <img className='benfitImage' src='./Images/fit3.png' alt='fitness'></img>
            <ul className='benifitlist'>
                <li>Stable autonomic nervous system equilibrium</li>
                <li>Pulse rate decreases</li>
                <li>Respiratory rate decreases</li>
                <li>Blood Pressure decreases (of special significance for hyporeactors)</li>
                <li>Galvanic Skin Response (GSR) increases</li>
                <li>EEG - alpha waves increase (theta, delta, and beta waves also increase during various stages of meditation)</li>
                <li>EMG activity decreases</li>
                <li>Cardiovascular efficiency increases</li>
                <li>Respiratory efficiency increases</li>
                <li>Excretory functions improve</li>
                </ul>
        </div>
        <p className='benifitHeading1'>Psychological Benefits Of Yoga</p>
        <div>
            <img className='benfitImage1' src='./Images/fit5.png' alt='fitness'></img>
            <ul className='benifitlist1'>
                <li>Somatic and kinesthetic awareness increase</li>
                <li>Mood improves and subjective well-being increases</li>
                <li>Self-acceptance and self-actualization increase</li>
                <li>Social adjustment increases</li>
                <li>Anxiety and Depression decrease</li>
                <li>Hostility decreases</li>
                <li>Attention improves</li>
                <li>Mood improves</li>
                <li>Learning efficiency improves</li>
                <li>Social skills increases</li>
                </ul>
        </div>

        <p className='benifitHeading'>Biochemical Benefits Of Yoga</p>
        <div>
            <img className='benfitImage' src='./Images/fit5.png' alt='fitness'></img>
            <ul  className='benifitlist'>
                <li>Glucose decreases</li>
                <li>Sodium decreases</li>
                <li>Self-acceptance and self-actualization increase</li>
                <li>Total cholesterol decreases</li>
                <li>Triglycerides decrease</li>
                <li>VLDL cholesterol decreases</li>
                <li>Catecholamines decrease</li>
                <li>Cholinesterase increases</li>
                <li>Total white blood cell count decreases</li>
                <li>Vitamin C increases</li>
                </ul>
        </div>
         
        <HealthShow/>
        </div>
    )
}

export default Fitness
