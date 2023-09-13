import React from "react";
import { useEffect, useState } from "react";
import MovieSlideShow from "../component/MovieSlideShow";
import Card from "../component/Card";
import FaceBook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import Twitter from "../assets/twitter.svg";
import Youtube from "../assets/youtube.svg";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const apiKey = "087a3c21eb30151299384c18aa3ccfd1";
  useEffect(() => {
    setIsLoading(true);
    if (searchQuery !== "") {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          setMovies(data.results);
          console.log(data.results);
          setIsLoading(false); // Update the state with movie data
        })
        .catch((error) => {
          setError("error", error);
        });
    } else {
      fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
      )
        .then((response) => response.json())
        .then((data) => {
          setMovies(data.results);
          console.log(data.results);
          setIsLoading(false); // Update the state with movie data
        })
        .catch((error) => {
          setError("error", error);
        });
    }
  }, [searchQuery]);
  return (
    <div className="min-h-screen">
      <main className="w-full">
        <MovieSlideShow
          apiKey={apiKey}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          movies={movies}
        />
      </main>
      <div className="my-12 flex justify-between w-11/12 mx-auto xl:px-8 px-4">
        <h2 className="text-3xl font-bold md:text-start text-center">
          Featured Movies
        </h2>
      </div>
      <section className="mt-12 mb-24 grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-x-4 gap-x-2 md:gap-y-40 sm:gap-y-24 gap-y-32 w-11/12 mx-auto place-items-center justify-content-center place-content-center flex-1">
        {!isLoading &&
          !error &&
          movies
            .slice(0, 10)
            .map((movie) => <Card key={movie.id} {...movie} />)}
        {isLoading && <p className="text-3xl font-semibold">Loading...</p>}
        {!isLoading && error && (
          <p className="text-3xl font-semibold">{error}</p>
        )}
      </section>
      <footer className="my-12 mx-auto w-[300px] flex flex-col justify-center items-center">
        <div className="flex justify-between items-center w-[80%]">
          <a href="/">
            <img src={FaceBook} alt="facebook" />
          </a>
          <a href="/">
            <img src={Instagram} alt="instagram" />
          </a>
          <a href="/">
            <img src={Twitter} alt="twitter" />
          </a>
          <a href="/">
            <img src={Youtube} alt="youtube" />
          </a>
        </div>
        <p className=" my-8 text-lg text-gray-400">
          &#9400; 2023 movieBox by Muhiz Akanni
        </p>
      </footer>
    </div>
  );
};

export default Home;
