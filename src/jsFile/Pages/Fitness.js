import React from 'react'
import HealthShow from '../Components/TipsUpdate/HealthShow'
import {Link} from 'react-router-dom'

function Fitness() {
    return (
        <div >
        <img className='fitnessfirstImage' src='./Images/food.jpg' alt='fitness'></img>

        <Link to={'/yoga'}><img className='FitnessImage' src='./Images/fitness2.jpg' alt="fitnessImage"></img></Link>
        <p className='FitnessMAinHeading'>What Is Yoga?</p>
        <p className='fitnessDesc'>A Hindu Spiritual And Ascetic Discipline, A Part Of Which, Including Breath Control, Simple Meditation, And The Adoption Of Specific Bodily Postures, Is Widely Practised For Health And Relaxation.</p>
        <h1 className='benifit'>To see benifits of Yoga Clicked on Image...</h1>    

        <p className='workoutWord'>Gym Workout</p>
        <Link to={'/gym'}><img className='imageWorkout' src='./Images/gymwork.webp' alt='gym'></img></Link>
         <p className='descworkout'> Regular physical activity can improve your muscle strength and boost your endurance. Exercise delivers oxygen and nutrients to your tissues and helps your cardiovascular system work more efficiently. And when your heart and lung health improve, you have more energy to tackle daily chores.</p>
         <p className='workoutplan'>For Workout Plan Clicked on Image...</p>    
   
   
         <HealthShow/>
        </div>
    )
}

export default Fitness
