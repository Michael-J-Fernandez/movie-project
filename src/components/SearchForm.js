// import { useState } from "react";

const SearchForm = ({ setQuery, query }) => {


  const handleSearchInputChange = (event) => {
    const { name, value } = event.target;
    setQuery(prevQuery => ({...prevQuery, [name]: value}));
  };

  return (
    <form /*onSubmit={handleSearchFormSubmit}*/>
      <label htmlFor="searchText">
        Find Movie:
        <input
          type="text"
          id="searchText"
          name="searchText"
          value={query.searchText}
          placeholder="Search criteria..."
          onChange={handleSearchInputChange}
        />
      </label>
      <label htmlFor="search-title">
        <input
          type="radio"
          id="search-title"
          name="searchCategory"
          value="title"
          checked={query.searchCategory === "title"}
          onChange={handleSearchInputChange}
        />
        Title
      </label>
      <label htmlFor="search-actors">
        <input
          type="radio"
          id="search-actors"
          name="searchCategory"
          value="actors"
          checked={query.searchCategory === "actors"}
          onChange={handleSearchInputChange}
        />
        Actors
      </label>
      <label htmlFor="search-plot">
        <input
          type="radio"
          id="search-plot"
          name="searchCategory"
          value="plot"
          checked={query.searchCategory === "plot"}
          onChange={handleSearchInputChange}
        />
        Plot
      </label>
      <label htmlFor="search-genre">
        <input
          type="radio"
          id="search-genre"
          name="searchCategory"
          value="genre"
          checked={query.searchCategory === "genre"}
          onChange={handleSearchInputChange}
        />
        Genre
      </label>
      <label htmlFor="search-imdbRating">
        <input
          type="radio"
          id="search-imdbRating"
          name="searchCategory"
          value="imdbRating"
          checked={query.searchCategory === "imdbRating"}
          onChange={handleSearchInputChange}
        />
        imDB Rating
      </label>
      <label htmlFor="search-director">
        <input
          type="radio"
          id="search-director"
          name="searchCategory"
          value="director"
          checked={query.searchCategory === "director"}
          onChange={handleSearchInputChange}
        />
        Director
      </label>
      <label htmlFor="search-year">
        <input
          type="radio"
          id="search-year"
          name="searchCategory"
          value="year"
          checked={query.searchCategory === "year"}
          onChange={handleSearchInputChange}
        />
        Year
      </label>
      <label htmlFor="search-dateAdded">
        <input
          type="radio"
          id="search-dateAdded"
          name="searchCategory"
          value="dateAdded"
          checked={query.searchCategory === "dateAdded"}
          onChange={handleSearchInputChange}
        />
        Date Added
      </label>

      {/* <button>Search</button> */}
    </form>
  );
};
 
export default SearchForm;