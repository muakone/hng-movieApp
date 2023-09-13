import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.svg";
import Search from "../assets/Search.svg";
import Menu from "../assets/Menu.svg";
import Play from "../assets/Play.svg";
import Imdb from "../assets/imdb.svg";
import Tomato from "../assets/tomato.svg";

const MovieSlideShow = ({ apiKey, searchQuery, setSearchQuery }) => {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch a list of popular movies from TMDb API
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [apiKey]);

  useEffect(() => {
    // Automatically advance the slideshow every few seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === movies.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds (adjust as needed)

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, movies]);

  const currentMovie = movies[currentIndex];

  return (
    <div
      className="slideshow-container md:bg-cover bg-[length:100%_100%] bg-center md:h-[90vh] h-[80vh] relative text-white"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${currentMovie?.backdrop_path})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col text-white xl:px-16 px-8 py-3">
        <header className="md:my-6 my-2 flex items-center justify-between w-full top-0 z-50">
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <div className="w-[42%] xl:-ml-36 md:flex hidden items-center border-2 border-white py-2 px-2 rounded-lg">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none"
              placeholder="what do you want to watch?"
            />
            <img src={Search} alt="search" />
          </div>
          <img src={Menu} alt="menu" />
        </header>
        {currentMovie && (
          <div className="text-center flex flex-col justify-center md:items-start items-center lg:w-[600px] md:w-[75%] w-[100%] lg:mt-20 mt-0 md:mx-0 mx-auto">
            <h1 className="md:text-5xl text-2xl font-bold md:text-start text-center my-2">
              {currentMovie.title}
            </h1>
            <div className="flex justify-between my-2 gap-x-8">
              <div className="flex justify-center items-center gap-x-2">
                <img src={Imdb} alt="imdb" />
                <p>86.0/100</p>
              </div>
              <div className="flex justify-center items-center gap-x-2">
                <img src={Tomato} alt="tomato" />
                <p>97%</p>
              </div>
            </div>
            <p className="mt-2 md:text-start text-center md:text-base text-sm">
              {currentMovie.overview}
            </p>
            <button className="bg-pink-700 text-white py-2.5 px-5 rounded-lg mt-4 flex justify-center items-center">
              <img src={Play} alt="play" className="mr-3" />
              WATCH TRAILER
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieSlideShow;
