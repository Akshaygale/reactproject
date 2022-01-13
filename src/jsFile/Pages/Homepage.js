import LatestHollyMovie from '../Components/Hollymovie/LatestHollyMovie'
import HealthShow from '../Components/TipsUpdate/HealthShow'
import HpageImage from '../Components/HpageImage'
import TheLatestTechnology from '../Components/TheLatestTechnolgy/TheLatestTechnology'

function Homepage() {
    return (
        <div>
            <HpageImage/>
            <TheLatestTechnology/>
            <LatestHollyMovie/>

            <div  className='LatestStoriesBoxFromHomePage'>
                <HealthShow/>
            </div>
        </div>
    )
}

export default Homepage
