import React from 'react'
import { Link } from 'react-router-dom'


function Nonveg() {
  return(
        <div  className='nonvegbox'>
            <h1 className='Heading1nonveg'>These diet tips for non-vegetarians can help one stay healthy.</h1>
<p className='nonvegdesc'>An individual s diet can be dictated by his religion, personal choice or by his health. While you may find several Indians who are vegetarians, there is a fair share of meat eaters as well. However, eating non-veg needs to be monitored if you wish to stay healthy. Here are a few non-vegetarian diet tips that would be wise to follow.</p>
<h2 className='Heading2nonveg'>How much protein should one consume in a day?</h2>
<p className='nonvegdesc'>When it comes to protein, non-vegetarians have loads of options such as meat, eggs, fish and dairy products. But it is also important for one to know the right quantity of protein that should typically be consumed in a day. DieticianPrema Kodical says that on an average one should consume 1.0g protein per kg of your body weight. For someone who is into weight training, the protein consumption varies according to the workout intensity. It can vary from 1.5g to 2.5g lean body mass.</p>
<h2 className='Heading2nonveg'>What are the best ways to eat meat?</h2>
<p className='nonvegdesc'>The best ways to eat meat are to cook it in the healthiest possible methods. Meats contain saturated fats which can thicken the blood and clog blood vessels. One should therefore be careful in their cooking methods so as to not add more damaging fat to it. According to Prema ,'Meat should ideally be grilled, barbecued, boiled, baked or roasted in a very small amount of healthy oil.'</p>
<h2 className='Heading2nonveg'>Dietician Neha Chandna s sample non-vegetarian diet chart</h2>

    <ul>
        <li>Breakfast: Toast + 3 egg whites + 1 yolk with veggies</li>
        <li>Mid morning: Fruits + Nuts</li>
        <li>Lunch: Salad + Roti/Rice+ Sabji + Chicken (gravy/dry)</li>
        <li>Evening: Sprouts/Chicken salad/Chicken roti roll</li>
        <li>Dinner: Soup + Salad + Fish Chicken( grilled/baked/steamed)</li>
    </ul>
    <Link to={'/diet'}>    <img  className='newlinktofood' src='./Images/diet3.jpg' alt='diet'></img></Link>

        </div>
  )
}

export default Nonveg
