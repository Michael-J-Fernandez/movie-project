import { useState } from "react";
import SearchForm from "./SearchForm";

const Table = ({ movies, deleteMovie }) => {

  const [query, setQuery] = useState({
    searchText: "",
    searchCategory: "title",
  });

  const deleteRow = (index) => {
    deleteMovie(index);
  };

  const filteredMovies = movies.filter((movie) => {
    const { searchCategory, searchText } = query;

    if (searchCategory !== 'actors') {
      return movie[searchCategory].toString().toLowerCase()
        .includes(searchText.toLowerCase());

    } else if (searchCategory === 'actors') {
      return movie[searchCategory].join(' ').toLowerCase().includes(searchText)
    }
  });

  // console.log("Filtered Movie:  ", filteredMovies)


  const moviesRows = filteredMovies.map((movie, index) => (
    <tr key={index}>
      <td>{movie.title}</td>
      <td>{movie.actors.join(", ")}</td>
      <td>{movie.plot}</td>
      <td>{movie.genre}</td>
      <td>{movie.imdbRating}</td>
      <td>{movie.director}</td>
      <td>{movie.year}</td>
      <td>{movie.dateAdded}</td>
      <td>
        <button onClick={() => deleteRow(index)}>Delete</button>
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
        <tbody>{filteredMovies.length === 0 ? <h1 className="not-found">Not Found</h1> : moviesRows}</tbody>
      </table>
    </>
  );
}

export default Table;