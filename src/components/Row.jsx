import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight} from 'react-icons/md'


const Row = ({ title, fetchURL,rowID }) => {
  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState(false);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  console.log(movies);

  const sliderLeft = () =>{
    var slider = document.getElementById('slider'+rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  }
  const sliderRight = () =>{
    var slider = document.getElementById('slider'+rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  return (
    <div>
      <h2 className="text-white p-4 font-bold md:text-xl">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft onClick={sliderLeft} size={40} className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"/>
        <div id={"slider" + rowID} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
          {movies.map((item, id) => (
            <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 ">
            <img
              className="w-full h-auto block"
              src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
              alt={item.title}
            />
            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
              <p className="flex justify-center items-center h-full whitespace-normal text-xs md:text-sm font-bold">
                {item?.title}
              </p>
              <p>
                {like ? (
                  <FaHeart className="text-gray-300 absolute top-4 left-4" />
                ) : (
                  <FaRegHeart className="text-gray-300 absolute top-4 left-4" />
                )}
              </p>
            </div>
          </div>
          ))}
        </div>
        <MdChevronRight onClick={sliderRight} size={40} className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"/>
      </div>
      
    </div>
  );
};

export default Row;
