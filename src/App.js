import {useState} from 'react'
import data from './data'
import MovieForm from './components/MovieForm'
import Table from './components/Table'

export default function App() {


  // /* --- MOVE THIS CODE TO MovieForm

  const [moviesData, setMoviesData] = useState(data)

  const addMovie = (formData) => {

    const newMovieData = {
      ...formData,
      actors: formData.actors.split(", "),
      dateAdded: `${new Date()}`
    };
    
    setMoviesData(prevMoviesData => [...prevMoviesData, newMovieData]);
  }



  return (
    <>
      <h1>Movie Form</h1>
      <Table
        moviesData={moviesData}
        setMoviesData={setMoviesData}
      />
      <MovieForm addMovie={addMovie}/>
    </>
  );
}