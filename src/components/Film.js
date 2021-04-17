import React, { useState } from "react";
import { moviesList } from "../assets/mookData";
import MoviesList from "./MoviesList";
import AddMovie from "./AddMovie";

const Films = () => {
  const [movieList, setMovieList] = useState(moviesList);
  const [searchWord, setSearchWord] = useState("");
  const [ratingSearch, setRatingSearch] = useState(0);

  const addMovie = (newMovie) => setMovieList([...movieList, newMovie]);
  const handleSearch = (e) => setSearchWord(e.target.value);
  return (
    <>
      <MoviesList
        moviesArray={
          searchWord
            ? movieList.filter((movie) =>
                movie.title.toLowerCase().includes(searchWord.toLowerCase())
              )
            : ratingSearch > 1
            ? movieList.filter((movie) => movie.rate >= ratingSearch)
            : movieList
        }
      />
      <AddMovie handleAdd={addMovie} />
    </>
  );
};

export default Films;