import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import requests  from '../Request'

const Main = () => {

    const [movie,setMovie] = useState([])

    useEffect(()=> {
        axios.get(requests.requestPopular)
        .then((response)=>{setMovie(response.data.results)})
    }, [])
    console.log(movie)

  return (
    <div>Main</div>
  )
}

export default Main