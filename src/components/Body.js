import React from 'react'

export default function Body ({ movies }) {

  const deleteRow = (index) => {
    return console.log(`Deleting index ${index}!`);
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
          <td>{movie.dateModified}</td>
          <td>
            <button onClick={() => deleteRow(index)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}