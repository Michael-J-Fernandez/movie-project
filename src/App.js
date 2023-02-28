import React, {useState} from 'react'
import data from './data'
import MovieForm from './components/MovieForm'
// import TableHead from './components/TableHead'
import Table from './components/Table'

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
      <Table movies={moviesData} deleteMovie={deleteMovie}/>
      <MovieForm addMovie={addMovie}/>
    </>
  );
}