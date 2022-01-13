import React,{ useState, useEffect} from 'react'
import hollyMovieList from '../Hollymovie/HollyMovieList'
import HollyMovieRepeat from '../Hollymovie/HollyMovieRepeat'

const HollyMovieperPage=6;
let arrayForHoldingHollyMovie=[];

const HollyPageContent=()=> {

    const [hidden, setHidden]=useState(false)
    const [movieToShow, setMovieToShow ]=useState([]);
    const [next, setNext]=useState(6);

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
            <HollyMovieRepeat updatehollywoodToRender={movieToShow}/>
            <div onClick={()=> setHidden(true)}>
                {!hidden && <button id='latestArticleLoadButton' onClick={handleHollyMovieLoadMore} 
                className='HollywoodmovieLoadmore'><img  className='arrowImage' src='./Images/arrow.png'></img>Load More</button>}
            </div>
            

        </div>
    )
    }


export default HollyPageContent

