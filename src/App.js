import React, {useState} from 'react'
import data from './data'
// import NewMovieForm from './NewMovieForm'
import Head from './components/Head'
import Body from './components/Body'


export default function App() {

  const [moviesData, setMoviesData] = useState(data)


  function NewMovieForm() {
    const [formData, setFormData] = useState({
      title: "",
      actors: "",
      plot: "",
      genre: "",
      imdbRating: "",
      director: "",
      year: "",
      dateAdded: "",
      dateModified: ""
    });

    const handleFormInputChange = (event) => {
      const { name, value } = event.target;

      console.log(name, value);

      setFormData(prevFormData => {
        return {
          ...prevFormData,
          [name]: value,
        };
      });
    };

    const handleSubmit = (event) => {
      event.preventDefault();

      const newMovieData = {
        ...formData,
        actors: formData.actors.split(", "),
        dateAdded: `${new Date()}`,
        dateModified: `${new Date()}`,
      };

      setMoviesData(prevMoviesData => [...prevMoviesData, newMovieData]);
      // console.log(newMovieData)
      console.log(formData)
    };




    return (
      <form onSubmit={handleSubmit}>
        
        <label htmlFor="title"> Title:
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Movie title"
            onChange={handleFormInputChange}
          />
        </label>
        <label htmlFor="actors"> Actors:
          <input
            type="text"
            name="actors"
            id="actors"
            placeholder="Actors"
            onChange={handleFormInputChange}
          />
        </label>
        <label htmlFor="actors"> Plot:
          <input
            type="text"
            name="plot"
            id="plot"
            placeholder="Plot..."
            onChange={handleFormInputChange}
          />
        </label>
        <label htmlFor="actors"> Genre:
          <input
            type="text"
            name="genre"
            id="genre"
            placeholder="Grenre(s)"
            onChange={handleFormInputChange}
          />
        </label>
        <label htmlFor="imdbRating"> imdbRating:
          <input
            type="text"
            name="imdbRating"
            id="imdbRating"
            placeholder="Rating"
            onChange={handleFormInputChange}
          />
        </label>
        <label htmlFor="director"> Director:
          <input
            type="text"
            name="director"
            id="director"
            placeholder="Director"
            onChange={handleFormInputChange}
          />
        </label>
        <label htmlFor="year"> Year:
          <input
            type="text"
            name="year"
            id="year"
            placeholder="Year"
            onChange={handleFormInputChange}
          />
        </label>
        <button>Add</button>
      </form>
    );
  }






  // console.log(movies)

  return (
    <>
      <table>
        <Head />
        <Body movies={moviesData}/>
      </table>
      <NewMovieForm />
    </>
  );
}