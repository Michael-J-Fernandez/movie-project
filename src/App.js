import React, {useState} from 'react'
import data from './data'

export default function App() {

  const [moviesData, setMoviesData] = useState(data)

  function Head () {
    return (
      <thead>
        <tr>
          <th>title</th>
          <th>actors</th>
          <th>plot</th>
          <th>genre</th>
          <th>imdbRating</th>
          <th>director</th>
          <th>year</th>
          <th>dateAdded</th>
          <th>dateModified</th>
          <th>modify</th>
        </tr>
      </thead>
    )
  }

  function Body (props) {
    
    const { movies } = props
    console.log("from the body: ", movies[0])
    
    const deleteRow = (index) => {

    

      return (
        console.log(`Deleting index ${index}!`)

        // setMoviesData(prevMoviesData => {
        //   return {
        //     ...prev,

        //   }
        // }
        )
      // )
    }

    return (
      <tbody>
        {movies.map((movie, index )=> (
          <tr key={index}>
            <td>{movie.title}</td>
            <td>{movie.actors}</td>
            <td>{movie.plot}</td>
            <td>{movie.genre}</td>
            <td>{movie.imdbRating}</td>
            <td>{movie.director}</td>
            <td>{movie.year}</td>
            <td>{movie.dateAdded}</td>
            <td>{movie.dateModified}</td>
            <td><button onClick={() => deleteRow(index)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    )
  }

  // console.log(movies)

  return (
    <table>
      <Head />
      <Body movies={moviesData}/>

    </table>
  );
}