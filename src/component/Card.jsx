import React from "react";
import Favorite from "../assets/Favorite.svg";
import Imdb from "../assets/imdb.svg";
import Tomato from "../assets/tomato.svg";

const Card = ({ title, release_date, poster_path }) => {
  const handleFavorite = () => {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODdhM2MyMWViMzAxNTEyOTkzODRjMThhYTNjY2ZkMSIsInN1YiI6IjYxZTFlMTgyMTk2NzU3MDA0MTQ2MWVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xF8EMGTofqH_tp9Nr0iFloJ53eZ_lMqPEBhUruimWec'
      },
      body: JSON.stringify({media_type: 'movie', media_id: 615656, favorite: true})
    };
    
    fetch('https://api.themoviedb.org/3/account/11757937/favorite', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }
  return (
    <div
      className="sm:w-[230px] w-[80%] sm:h-[400px] h-[500px]"
      data-testid="movie-card"
    >
      <div
        className=" sm:w-[230px] sm:bg-[length:230px_330px] bg-cover w-full sm:h-[330px] h-[450px] mx-auto"
        data-testid="movie-poster"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full flex justify-end items-end p-3">
          <img src={Favorite} alt="favorite" className="" />
        </div>
      </div>
      {/* <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="" data-testid="movie-poster" className="w-[50%]" /> */}
      <div className="my-1">
        <p data-testid="movie-release-date" className="text-gray-500 ">
          {release_date}
        </p>
        <p data-testid="movie-title" className="text-base font-bold">
          {title}
        </p>
        <div className="flex justify-between my-2">
          <div className="flex justify-center items-center gap-x-2">
            <img src={Imdb} alt="imdb" />
            <p>86.0/100</p>
          </div>
          <div className="flex justify-center items-center gap-x-2">
            <img src={Tomato} alt="tomato" />
            <p>97%</p>
          </div>
        </div>
        <p className="text-gray-500">Action, Adventure, Horror</p>
      </div>
    </div>
  );
};

export default Card;
