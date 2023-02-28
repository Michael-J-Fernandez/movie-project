import React, {useState} from 'react'
import data from './data'
import NewMovieForm from './components/NewMovieForm'
import Head from './components/TableHead'
import TableBody from './components/TableBody'

export default function App() {

  const [moviesData, setMoviesData] = useState(data)

  const addMovie = (formData) => {

    const newMovieData = {
      ...formData,
      actors: formData.actors.split(", "),
      dateAdded: `${new Date()}`,
      dateModified: `${new Date()}`,
    };

    setMoviesData(prevMoviesData => [...prevMoviesData, newMovieData]);
  }

    const deleteMovie = (index) => {
      setMoviesData(prevMoviesData => {
        return prevMoviesData.filter((movie, i) => i !== index)
      })
    }

  return (
    <>
    <h1>Movie Form</h1>
      <table>
        <Head />
        <TableBody movies={moviesData} deleteMovie={deleteMovie}/>
      </table>
      <NewMovieForm addMovie={addMovie}/>
    </>
  );
}