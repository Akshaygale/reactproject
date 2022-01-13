import React,{ useState, useEffect } from 'react'
import HealtTipsRepeat from './HealtTipsRepeat';
import updateHealthTips from './UpdateHealthTips'

const TipsperPage=1;
let arrayForHoldingTips=[];

const Lastest_Stories=()=> {

    const [hidden, setHidden]=useState(false)
    const [tipsToShow, setTipsToShow ]=useState([]);
    const [next, setNext]=useState(1);

    const loopWithSlice=(start, end)=>{
        const slicedTipsRepeat=updateHealthTips.slice(start, end);
        arrayForHoldingTips = [...arrayForHoldingTips, ...slicedTipsRepeat];
        setTipsToShow(arrayForHoldingTips);
    };

    useEffect(()=>{
        loopWithSlice(0,TipsperPage);
    },[])

    const handelTipsLoadMore=()=>{
        loopWithSlice(next, next + TipsperPage);
        setNext(next + TipsperPage);
      
    };

    return (
            <div className='latestStoriesShow'>
                <p className='LatestStoriesMainHeading'>Healthy Life Hacks for Busy People</p>
                <div className='LatestStoriesHeadingRedLine'/>
                <div className='linehorizontal'></div><div>
                <HealtTipsRepeat updateHealthToRender={tipsToShow}/>
                </div> 
               <div onClick={()=> setHidden(true)}>
                    {!hidden && <button id='latestStoriesLoadButton' onClick={handelTipsLoadMore} className='latestStoriesViewMore'> 
                        <img className='arrowImage' src='./Images/arrowRight.png' alt='arrow'></img>View More</button>}

                </div>  
            </div>
    )
    }


export default Lastest_Stories

