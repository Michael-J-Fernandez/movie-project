import { useState } from "react";

const MovieForm = ({ addMovie }) => {
  
  const resetForm = {
    title: "",
    actors: "",
    plot: "",
    genre: "",
    imdbRating: "",
    director: "",
    year: "",
    dateAdded: "",
  };

  const [formData, setFormData] = useState(resetForm);

  const handleFormInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addMovie(formData);
    setFormData(resetForm);
  };

  return (
    <form className="movie-form" onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          id="title"
          placeholder="Movie title"
          autocomplete="off"
          onChange={handleFormInputChange}
        />
      </label>
      <label htmlFor="actors">
        Actors:
        <input
          type="text"
          name="actors"
          value={formData.actors}
          id="actors"
          placeholder="Actors"
          autocomplete="off"
          onChange={handleFormInputChange}
        />
      </label>
      <label htmlFor="actors">
        Plot:
        <input
          type="text"
          name="plot"
          value={formData.plot}
          id="plot"
          placeholder="Plot..."
          autocomplete="off"
          onChange={handleFormInputChange}
        />
      </label>
      <label htmlFor="actors">
        Genre:
        <input
          type="text"
          name="genre"
          value={formData.genre}
          id="genre"
          placeholder="Grenre(s)"
          autocomplete="off"
          onChange={handleFormInputChange}
        />
      </label>
      <label htmlFor="imdbRating">
        imdbRating:
        <input
          type="text"
          name="imdbRating"
          value={formData.imdbRating}
          id="imdbRating"
          placeholder="Rating"
          autocomplete="off"
          onChange={handleFormInputChange}
        />
      </label>
      <label htmlFor="director">
        Director:
        <input
          type="text"
          name="director"
          value={formData.director}
          id="director"
          placeholder="Director"
          autocomplete="off"
          onChange={handleFormInputChange}
        />
      </label>
      <label htmlFor="year">
        Year:
        <input
          type="text"
          name="year"
          value={formData.year}
          id="year"
          placeholder="Year"
          autocomplete="off"
          onChange={handleFormInputChange}
        />
      </label>
      <button>Add</button>
    </form>
  );
};

export default MovieForm;