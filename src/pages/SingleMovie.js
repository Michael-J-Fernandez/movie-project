import { Link, useParams } from "react-router-dom";

const SingleMovie = ({ moviesData }) => {

    const { singleTitle } = useParams();

    const singleMovie = moviesData.find(movie => movie.title === singleTitle);

    const {
      title,
      actors,
      plot,
      genre,
      imdbRating,
      director,
      year,
      dateAdded,
    } = singleMovie;

    return (
      <>
        <Link to=".." relative="path">
          Back to Movies
        </Link>
        <h1>{title}</h1>
        <p><strong>Director:</strong> {director}</p>
        <p><strong>Actors:</strong> {actors.join(", ")}</p>
        <p><strong>Plot:</strong> {plot}</p>
        <p><strong>Genre:</strong> {genre}</p>
        <p><strong>IMDb Rating:</strong> {imdbRating}</p>
        <p><strong>Year:</strong> {year}</p>
        <p><strong>Date Added:</strong> {dateAdded}</p>
        
      </>
    );
}
 
export default SingleMovie;