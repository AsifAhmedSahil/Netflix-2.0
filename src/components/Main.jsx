import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import requests  from '../Request'

const Main = () => {

    const [movies,setMovie] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(()=> {
        axios.get(requests.requestPopular)
        .then((response)=>{setMovie(response.data.results)})
    }, [])
    console.log(movie)

  return (
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
        </div>
    </div>
  )
}

export default Main