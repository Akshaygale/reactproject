import React from 'react'
import { Link } from 'react-router-dom'

function Food() {
    return (
        <div>
        <img className='foodImage' src='./Images/food1.jpg' alt='food'></img>
            <h1 className='foodpageHeading'> Plant-Based Diet for Beginners</h1>
            <p className='Italicline'>It is extremely difficult to keep up with all the available diets in the market. It can be even more difficult to settle on the right one for you. But you have decided to start a plant-based diet. That’s great! </p>
            <p className='Italicline'>So how does one start a plant-based diet? What foods should you be eating? Is there a plant-based diet for beginners? Yes, it is called macrobiotics. Macrobiotics comprises an easy to follow plant-based diet and simple eating and lifestyle practices. All targeted towards creating strong, lasting health.</p>
            <p className='dietHeading'>What is a Macrobiotic Plant-Based Diet?</p>
            <p className='descHeadingfood'>Macrobiotic was first coined by George Ohsawa, a Japanese philosopher. His philosophical teachings on dieting and health date back to the 1930s. Yet, it was not until in the 1960s that the idea of macrobiotics got introduced in the US. Macrobiotics is a way of life emphasizing more on balance and consistency.</p>
            <p className='descHeadingfood'>Macrobiotics is based on habits and practices of long-standing world civilizations that continue to live without chronic diseases. It’s aimed at balancing physical and spiritual well-being. The macrobiotic plant-based diet includes whole grains, beans, vegetables, nuts, seeds and fruits and naturally pickled and fermented foods. While also removing or reducing meat, dairy, artificial ingredients and processed foods. </p>
            <p className='dietHeading'>Macrobiotic Diet Benefits</p>
            <p className='descHeadingfood'> A macrobiotic diet provides great health benefits. Plant-based foods are high in fiber, nutrients and minerals. Therefore, a healthy plant-based diet helps the body to stay balanced, improve gut and digestion, strengthen immunity and eliminate toxins. </p>
            <div className='descHeadingfood'>Additional benefits include:
                <ul>
                    <li>Blood pressure, diabetes, and hypoglycemia – the diet consists of whole grains and vegetables. These foods are balanced and stable. For this reason, they help keep your blood pressure steady.</li>
                <li>Heart Health – the macrobiotic diet reduces the risk of heart disease because plant-based foods assist with weight management and improve bodily functions. Meaning your heart will not have to work as hard compared to a diet high in processed foods.</li>
                <li>Fatigue – Today’s diet is highly imbalanced and acidic. Making it harder for the body to deliver oxygen to vital organs. Additionally, the digestive system struggles to take in nutrients and minerals. So when you start a plant-based diet, the body begins to repair and regenerate. Making you feel more energized, younger and stronger.</li> 
                </ul>
            </div>
            <h2 className='dietedit'>Healty Diet is necessary for the healthy life... So always follow healty diet tips...It will Veg or Non-Veg...</h2>
            <Link className='dietlink' to={'/diet'}>    <img  className='imagedietpages_DietFoodbox' src='./Images/diet3.jpg' alt='diet'></img></Link>
            <Link className='dietlink' to={'/nonveg'}><img  className='imagedietpages_DietFoodbox' src='./Images/nonveg.jpg' alt='diet'></img></Link>
    </div>
    )
}

export default Food
