import { useState } from "react";
import { Link, Outlet } from 'react-router-dom'
import SearchForm from "./SearchForm";

const Table = ({ moviesData, setMoviesData }) => {
  const [query, setQuery] = useState({
    searchText: "",
    searchCategory: "title",
  });

  const deleteMovie = (index) => {
    setMoviesData((prevMoviesData) => {
      return prevMoviesData.filter((movie, i) => i !== index);
    });
  };

  const filteredMovies = moviesData.filter((movie) => {
    const { searchCategory, searchText } = query;

    if (searchCategory !== "actors") {
      return movie[searchCategory]
        .toString()
        .toLowerCase()
        .includes(searchText.toLowerCase());
    } else if (searchCategory === "actors") {
      return movie[searchCategory]
        .join(" ")
        .toLowerCase()
        .includes(searchText);
    }
  });

  const moviesRows = filteredMovies.map((movie, index) => (
    <tr key={index}>
      <td><Link to={`/movies/${movie.title}`}>{movie.title}</Link></td>
      <td>{movie.actors.join(", ")}</td>
      <td>{movie.plot}</td>
      <td>{movie.genre}</td>
      <td>{movie.imdbRating}</td>
      <td>{movie.director}</td>
      <td>{movie.year}</td>
      <td>{movie.dateAdded}</td>
      <td>
        <button onClick={() => deleteMovie(index)}>Delete</button>
      </td>
    </tr>
  ));

  return (
    <>
      <SearchForm setQuery={setQuery} query={query} />
      <table>
        <thead>
          <tr>
            <th>TITLE</th>
            <th>ACTORS</th>
            <th>PLOT</th>
            <th>GENRE</th>
            <th>IMDB RATING</th>
            <th>DIRECTOR</th>
            <th>YEAR</th>
            <th>DATE ADDED</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {filteredMovies.length === 0 ? (
            <tr className="not-found">
              <td>Not Found</td>
            </tr>
          ) : (
            moviesRows
          )}
        </tbody>
      </table>
      <Outlet />
    </>
  );
};

export default Table;
