import React from 'react'

export default function TableBody ({ movies, deleteMovie }) {

  const deleteRow = (index) => {
    console.log(`Deleting index ${index}!`);
    deleteMovie(index)
  };

  return (
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
  );
}