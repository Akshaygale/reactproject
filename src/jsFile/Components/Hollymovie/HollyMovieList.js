import React from "react";
import {Link} from 'react-router-dom'


const hollyMovieList=[
    {   "line": <div className='HollymovieHrline'/>,
        "box":<div className="LatestHollywoodMovie">
        <Link to={'/pirates'}><img className='HollyImage' src='./Images/H.pca.jpeg' alt="hollywoodImage"></img></Link>
        <div className='HollyHeading'>Pirates of the Caribbean: Dead Man's Chest</div>
        <div className='HollyMovie_Desc'>Captain Jack Sparrow seeks the heart of Davy Jones, a mythical pirate, in order to avoid being enslaved to him. However, others, including his friends Will and Elizabeth, want it for their own gain.</div>
        <div className="Hollyrating">Rating : 7.3/10</div>
        <div className="Hollytype">Action/Adventure</div>
        <div className="HollyDate">Hollywood 24 June 2006</div>
        </div>
    },
    {
        "line":<div className='HollymovieHrline'/>,
        "box":<div className="LatestHollywoodMovie">
        <Link to={'/olympus'}><img className='HollyImage' src='./Images/H.olympus.jpg' alt="hollywoodImage"></img></Link>
        <div className='HollyHeading'>Olympus Sequence : The London Has Fallen</div>
        <div className='HollyMovie_Desc'>Mike, a Secret Service agent, must find a way to escape with his team when Barkawi, a terrorist, attacks all the world leaders attending the funeral of the British Prime Minister, James Wilson.</div>
        <div className="Hollyrating">Rating : 6.5/10</div>
        <div className="Hollytype">Action/Thriller</div>
        <div className="HollyDate">Hollywood 3 March 2016</div>
        </div>

    },
    {
        "line":<div className='HollymovieHrline'/>,
        "box":<div className="LatestHollywoodMovie">
        <Link to={'/beautybeast'}><img className='HollyImage' src='./Images/H.bb.jpg' alt="hollywoodImage"></img></Link>
        <div className='HollyHeading'>Disney Movie : Beauty and the Beast (2017)</div>
        <div className='HollyMovie_Desc'>Belle, a village girl, embarks on a journey to save her father from a creature that has locked him in his dungeon. Eventually, she learns that the creature is an enchanted prince who has been cursed.</div>
        <div className="Hollyrating">Rating : 7.1/10</div>
        <div className="Hollytype">Musical/Romance</div>
        <div className="HollyDate">Hollywood 23 March 2017</div>
        </div>

    },
    {
        "line":<div className='HollymovieHrline'/>,
        "box":<div className="LatestHollywoodMovie">
        <Link to={'/transformer'}><img className='HollyImage' src='./Images/H.transformer.jpg' alt="hollywoodImage"></img></Link>
        <div className='HollyHeading'>The Transformers : Dark of the Moon (2011)</div>
        <div className='HollyMovie_Desc'>Sam Witwicky and the Autobots must unravel the secrets of a Cybertronian spacecraft hidden on the Moon before the Decepticons can use it for their own evil schemes.</div>
        <div className="Hollyrating">Rating : 6.2/10</div>
        <div className="Hollytype">Action/Sci-fi </div>
        <div className="HollyDate">Hollywood 29 June 2011 </div>
        </div>

    },
    {
        "line":<div className='HollymovieHrline'/>,
        "box":<div className="LatestHollywoodMovie">
        <Link to={'/wonder'}><img className='HollyImage' src='./Images/H.wonder.jpeg' alt="hollywoodImage"></img></Link>
        <div className='HollyHeading'>DC Entertainment : Wonder Woman (2017)</div>
        <div className='HollyMovie_Desc'>Princess Diana of an all-female Amazonian race rescues US pilot Steve. Upon learning of a war, she ventures into the world of men to stop Ares, the god of war, from destroying mankind.</div>
        <div className="Hollyrating">Rating : 7.4/10</div>
        <div className="Hollytype">Action/Adventure</div>
        <div className="HollyDate">Hollywood  2 June 2017</div>
        </div>

    },
    {
        "line":<div className='HollymovieHrline'/>,
        "box":<div className="LatestHollywoodMovie">
        <Link to={'/wool'}><img className='HollyImage' src='./Images/H.wool.jpg' alt="hollywoodImage"></img></Link>
        <div className='HollyHeading'>X-Men Origin : The Wolverine In 3D (2013) </div>
        <div className='HollyMovie_Desc'>Logan travels to Tokyo to meet Yashida, an old acquaintance who is dying. The situation regresses when Yashida offers to take away his healing abilities, but Logan refuses.</div>
        <div className="Hollyrating">Rating : 6.7/10</div>
        <div className="Hollytype">Action/Adventure</div>
        <div className="HollyDate">Hollywood 26 July 2013</div>
        </div>

    },
    {
        "line":<div className='HollymovieHrline'/>,
        "box":<div className="LatestHollywoodMovie">
        <Link to={'/blackpanther'}><img className='HollyImage' src='./Images/H.blackpanther.jpg' alt="hollywoodImage"></img></Link>
        <div className='HollyHeading'>Marvels Cinematic Universe : Black Panther  </div>
        <div className='HollyMovie_Desc'>After his father's death, T'Challa returns home to Wakanda to inherit his throne. However, a powerful enemy related to his family threatens to attack his nation.</div>
        <div className="Hollyrating">Rating : 7.3/10</div>
        <div className="Hollytype">Action/Adventure</div>
        <div className="HollyDate">Hollywood 16 February 2018</div>
        </div>

    }
    
]

export default  hollyMovieList

// updateBuilding