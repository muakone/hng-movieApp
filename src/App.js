import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState, useRef } from "react";
import MovieSlideShow from "./component/MovieSlideShow";
import Card from "./component/Card";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const query = useRef();
  const [searchQuery, setSearchQuery] = useState("");
  const apiKey = "087a3c21eb30151299384c18aa3ccfd1";
  useEffect(() => {
    setIsLoading(true);
    if (searchQuery !== "") {
      fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          setMovies(data.results);
          console.log(data.results);
          setIsLoading(false); // Update the state with movie data
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
      )
        .then((response) => response.json())
        .then((data) => {
          setMovies(data.results);
          console.log(data.results);
          setIsLoading(false); // Update the state with movie data
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [searchQuery]);

  const handleSearch = (e) => {
    query.current = e.target.value;
    setIsLoading(true);
    console.log(query);
    if (query.current !== "") {
      fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${query.current}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          setMovies(data.results);
          console.log(data.results);
          setIsLoading(false); // Update the state with movie data
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
      )
        .then((response) => response.json())
        .then((data) => {
          setMovies(data.results);
          console.log(data.results);
          setIsLoading(false); // Update the state with movie data
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  };
  //https://api.themoviedb.org/3/search/multi?api_key=3d820eab8fd533d2fd7e1514e86292ea&language=en-US&query=${searchText}&page=${page}&include_adult=false
  return (
    <div className="min-h-screen">
      <main className="w-full">
        <MovieSlideShow
          apiKey={apiKey}
          handleSearch={handleSearch}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </main>
      <div className="my-12 flex justify-between w-11/12 mx-auto xl:px-8 px-4">
        <h2 className="text-3xl font-bold md:text-start text-center">Featured Movies</h2>
      </div>
      <section className="mt-12 mb-24 grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-x-4 gap-x-2 md:gap-y-40 sm:gap-y-24 gap-y-32 w-11/12 mx-auto place-items-center justify-content-center place-content-center flex-1">
        {!isLoading ? (
          movies.slice(0, 10).map((movie) => <Card key={movie.id} {...movie} />)
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </div>
  );
}

export default App;
