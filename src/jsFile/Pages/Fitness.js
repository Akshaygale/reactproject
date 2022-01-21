import React from 'react'
import HealthShow from '../Components/TipsUpdate/HealthShow'
import {Link} from 'react-router-dom'

function Fitness() {
    return (
        <div >
        <img className='fitnessfirstImage' src='./Images/food.jpg' alt='fitness'></img>

        

        <p className='workoutWord'>Gym Workout</p>
        <Link to={'/gym'}><img className='imageWorkout' src='./Images/gymwork.webp' alt='gym'></img></Link>
   
        <Link to={'/yoga'}><img className='FitnessImageBox' src='./Images/yoga.jpg' alt="fitnessImage"></img></Link>
        <p className='yogaWord'>Yoga Plan</p>
   
         <HealthShow/>
        </div>
    )
}

export default Fitness
