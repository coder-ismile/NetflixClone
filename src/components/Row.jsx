import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Movie from './Movie';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import YouTube from 'react-youtube';

const Row = ({title,fetchURL,rowID}) => {
    const[movies , setmovies] = useState([]);
    const[trailerUrl,setTrailerUrl] = useState("")

    useEffect(()=>{
        axios.get(fetchURL).then((response)=>{
            setmovies(response.data.results)
        })
    },[fetchURL])

const sliderLeft =()=>{
 var slider = document.getElementById('slider'+ rowID);
 slider.scrollLeft = slider.scrollLeft - 500;
};
const sliderRight =()=>{
    var slider = document.getElementById('slider'+rowID);
   slider.scrollLeft = slider.scrollLeft + 500;
};
const opts ={
  height:"300",
  width:"100%",
  playerVars:{
    //  https://developers.google.com/youtube/player_parameters
    autoplay:1,
  },
};
  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft 
           onClick={sliderLeft} 
           className=' bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block ' 
           size={40}/>
        <div 
            id={'slider' + rowID} 
            className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
            {movies.map((item, id)=>(
            <Movie  key={id} item={item} trailerUrl={trailerUrl} setTrailerUrl={setTrailerUrl} />
            ))}
        </div>
        <MdChevronRight 
        onClick={sliderRight} 
        className='bg-white rounded-full right-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'  size={40}/>
      </div>

     { trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}

    </>
  )
}

export default Row
