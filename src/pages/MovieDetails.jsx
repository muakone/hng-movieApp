import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../component/Sidebar";
import Play from "../assets/Play.svg";
import TwoTickets from "../assets/Two Tickets.svg";
import List from "../assets/List.svg";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const utcRef = useRef();
  const apiKey = "087a3c21eb30151299384c18aa3ccfd1";
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setDetails(data);
        console.log(data);
        setIsLoading(false);
        if (data.success === false) {
          setError(data.status_message);
          console.log("hjhvjhvvh");
        } // Update the state with movie data
      })
      .catch((error) => {
        setError("error:", error);
      });
  }, [id]);
  utcRef.current = details?.release_date;
  return (
    <div className="lg:flex w-full">
      <Sidebar />
      <div className="lg:flex-1 lg:w-full w-[90%] mx-auto">
        {error && (
          <p className="my-12 text-center text-3xl font-semibold">{error}</p>
        )}
        {isLoading && (
          <p className="my-12 text-center text-3xl font-semibold">Loading</p>
        )}
        {!isLoading && !error && details && (
          <div className="md:w-[90%] w-full mx-auto lg:my-6 my-2">
            <div
              className="slideshow-container md:bg-cover bg-[length:100%_100%] bg-center md:h-[370px] h-[50vh] relative rounded-3xl flex items-center justify-center"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${details?.backdrop_path})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top",
              }}
            >
              <img src={Play} alt="play" />
            </div>
            <div className="my-4">
              <div className="flex xl:flex-row flex-col justify-between">
                <div className="flex flex-wrap gap-x-2 items-center">
                  <p
                    data-testid="movie-title"
                    className="lg:text-xl text-base text-gray-600 font-medium  xl:mt-0 my-1.5"
                  >
                    {details?.title}
                  </p>
                  <p className="text-3xl text-gray-600 font-medium -mt-4">.</p>
                  <p
                    data-testid="movie-release-date"
                    className="lg:text-xl text-base text-gray-600 font-medium xl:mt-0 my-1.5"
                  >
                    {new Date(utcRef.current).toUTCString()}
                  </p>
                  <p className="text-3xl text-gray-600 font-medium -mt-4">.</p>
                  <p className="lg:text-xl text-base text-gray-600 font-medium xl:mt-0 my-1.5">
                    PG-13
                  </p>
                  <p className="text-3xl text-gray-600 font-medium -mt-4">.</p>
                  <p
                    data-testid="movie-runtime"
                    className="lg:text-xl text-base text-gray-600 font-medium xl:mt-0 my-1.5"
                  >
                    {details?.runtime}
                  </p>
                  {details?.genres.map((genr, index) => (
                    <p key={index} className="border border-red-100 rounded-full py-0.5 lg:px-4 px-2 mx-1 text-red-600 font-medium xl:mt-0 my-1.5">
                      {genr.name}
                    </p>
                  ))}
                </div>
                <div className="flex items-center xl:my-0 my-2">
                  <p className="text-gray-200 lg:text-xl text-base px-2">8.5</p>
                  <p className="lg:text-xl text-base text-gray-600 border-l-[3px] border-l-gray-600 px-2">
                    350k
                  </p>
                </div>
              </div>
              <div className="my-6 flex lg:flex-row flex-col justify-center">
                <div className="flex-1 md:mr-6 ">
                  <p data-testid="movie-overview" className="text-base">
                    {details?.overview}
                  </p>
                  <div className="grid gap-y-6 my-9">
                    <p className="text-base">
                      Director:{" "}
                      <span className="text-[#BE123C] ml-1 font-medium">
                        Joseph Kosinki
                      </span>
                    </p>
                    <p className="text-base">
                      Writers:{" "}
                      <span className="text-[#BE123C] ml-1 font-medium">
                        Jim Cash, Jack Epps jnr, Peter Craig
                      </span>
                    </p>
                    <p className="text-base">
                      Stars:{" "}
                      <span className="text-[#BE123C] ml-1 font-medium">
                        Tom Cruise, Jennifer Connelly, Miles Teller
                      </span>
                    </p>
                    <div className="flex w-full">
                      <button className="bg-[#BE123C] md:w-fit w-full xl:px-6 lg:px-4 px-3 py-2.5 my-2 rounded-[10px] text-white flex justify-center">
                        Top rated movie #65
                      </button>
                      <select
                        name=""
                        id=""
                        className="md:flex-1 md:flex hidden w-fit h-11 mt-2 border-2 border-l-0 -ml-[3px] ld:pl-7 pl-3 font-medium text-gray-800 lg:text-lg text-base rounded-r-lg"
                      >
                        <option value="Award 9 nominations">
                          Award 9 nominations
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="lg:w-60 w-full">
                  <div className="">
                    <button className="bg-[#BE123C] w-full py-2 lg:my-2 my-4 rounded-[10px] text-white flex justify-center gap-x-3">
                      <img src={TwoTickets} alt="tickets" />
                      See Showtimes
                    </button>
                    <button className="bg-red-100 border border-[#BE123C] w-full py-2 my-2 rounded-[10px] flex justify-center gap-x-3">
                      <img src={List} alt="list" />
                      More watch options
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
