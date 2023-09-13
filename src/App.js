import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/:id" element={<MovieDetails />} />
    </Routes>
  );
}

export default App;
