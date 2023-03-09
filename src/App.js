import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './layouts/Layout'
import Home from './pages/Home'
import MovieForm from "./components/MovieForm";
import Table from "./components/Table";


const DATA_URL = "https://raw.githubusercontent.com/Michael-J-Fernandez/movie-project/00953d3a1e0683a198f6f79072721f221e68b657/src/data-copy.json";

export default function App() {
  
  // /* --- MOVE THIS CODE TO Table
  const [moviesData, setMoviesData] = useState([]);

  // Fetch data from database and assign to moviesData state
  useEffect(() => {
    fetch(DATA_URL)
      .then(res => res.json())
      .then(data => setMoviesData(data))

  }, [])

  // Add user data to moviesDataState
  const addMovie = (formData) => {
    const newMovieData = {
      ...formData,
      actors: formData.actors.split(", "),
      dateAdded: `${new Date()}`,
    };

    setMoviesData((prevMoviesData) => [...prevMoviesData, newMovieData]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Table moviesData={moviesData} setMoviesData={setMoviesData} />} /> 
           <Route path="movies/:id" element={<MovieForm addMovie={addMovie} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
