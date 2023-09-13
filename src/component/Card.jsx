import React, { useState } from "react";
import Favorite from "../assets/Favorite.svg";
import Like from "../assets/Liked.svg";
import Imdb from "../assets/imdb.svg";
import Tomato from "../assets/tomato.svg";

const Card = ({ title, release_date, poster_path, id }) => {
  const [like, setLike] = useState(false);
  const handleFavorite = (setId) => {
    setLike(true);
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODdhM2MyMWViMzAxNTEyOTkzODRjMThhYTNjY2ZkMSIsInN1YiI6IjYxZTFlMTgyMTk2NzU3MDA0MTQ2MWVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xF8EMGTofqH_tp9Nr0iFloJ53eZ_lMqPEBhUruimWec",
      },
      body: JSON.stringify({
        media_type: "movie",
        media_id: setId,
        favorite: true,
      }),
    };

    fetch("https://api.themoviedb.org/3/account/11757937/favorite", options)
      .then((response) => response.json())
      .then((response) => {
        if (response.success === true) {
          setLike(true);
          console.log(response);
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div
      className="sm:w-[230px] w-[80%] sm:h-[400px] h-[500px]"
      data-testid="movie-card"
    >
      <div
        className=" sm:w-[230px] sm:bg-[length:230px_330px] bg-cover w-full sm:h-[330px] h-[400px] mx-auto"
        data-testid="movie-poster"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full flex justify-end items-end p-3">
          {like ? (
            <img src={Like} alt="favorite" />
          ) : (
            <img
              src={Favorite}
              alt="favorite"
              onClick={() => handleFavorite(id)}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>
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
