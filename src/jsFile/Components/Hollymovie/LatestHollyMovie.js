import React,{ useState, useEffect} from 'react'
import Advertisement from '../Advertisement'
import hollyMovieList from './HollyMovieList'
import TopsShowBolly from '../Bollymovie/TopsShowBolly'
import HollyMovieRepeat from './HollyMovieRepeat'
// import { Outlet } from 'react-router-dom';

const HollyMovieperPage=4;
let arrayForHoldingHollyMovie=[];

const LatestHollyMovie=()=> {

    const [hidden, setHidden]=useState(false)
    const [movieToShow, setMovieToShow ]=useState([]);
    const [next, setNext]=useState(4);

    const loopWithSlice=(start, end)=>{
        const slicedMovieRepeat=hollyMovieList.slice(start, end);
        arrayForHoldingHollyMovie = [...arrayForHoldingHollyMovie, ...slicedMovieRepeat];
        setMovieToShow(arrayForHoldingHollyMovie);
    };

    useEffect(()=>{
        loopWithSlice(0,HollyMovieperPage);
    },[])

    const handleHollyMovieLoadMore=()=>{
        loopWithSlice(next, next + HollyMovieperPage);
        setNext(next + HollyMovieperPage);
      
    };

    return (
        <div>
            <h1 className='Hollywoodmovie_Word'> Hollywood Movies</h1>
            <div className='Thelatest_wordundeline'/>
            <div/>
            <Advertisement/>
            <HollyMovieRepeat updatehollywoodToRender={movieToShow}/>

            <div onClick={()=> setHidden(true)}>
                {!hidden && <button id='latestArticleLoadButton' onClick={handleHollyMovieLoadMore} 
                className='HollywoodmovieLoadmore'><img  className='arrowImage' src='./Images/arrow.png'></img>Load More</button>}
            </div>
                {/* TOP BOLLYWOOD POST*/}
            <TopsShowBolly/>
            
            {<img className='FitSeparateImage' src='./Images/Fit.ness.jpg'  alt='hollywoodImage'></img>}

        </div>
    )
    }


export default LatestHollyMovie

