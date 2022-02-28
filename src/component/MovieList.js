import React from "react";
import MovieAdd from "./MovieAdd";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, text }) => {
  return (
    <div>
      {movies
        .filter((el) => el.name.toLowerCase().includes(text.toLowerCase()))
        .map((el) => (
          <MovieCard movie={el} />
        ))}
    </div>
  );
};

export default MovieList;
