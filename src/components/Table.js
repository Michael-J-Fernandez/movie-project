export default function TableBody ({ movies, deleteMovie }) {

  const deleteRow = (index) => {
    deleteMovie(index)
  };
  
  return (
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
        {movies.map((movie, index) => (
          <tr key={index}>
            <td>{movie.title}</td>
            <td>{movie.actors.join(', ')}</td>
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
        ))}
      </tbody>
    </table>
  );
}