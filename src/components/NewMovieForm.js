// import React, {useState} from 'react'

// export default function NewMovieForm () {
//   const [formData, setFormData] = useState({
//     title: "",
//     actors: [],
//     plot: "",
//     genre: "",
//     imdbRating: "",
//     director: "",
//     year: "",
//     // dateAdded: Date.now(),
//     // dateModified: Date.now()
//   });

//   const handleFormInputChange = (event) => {
//     const { name, value } = event.target;

//     console.log(name, value);

//     setFormData((prevFormData) => {
//       return {
//         ...prevFormData,
//         [name]:  [name] === "actors" ? value.split(', ') : value
//       };
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault()

//     const newMovie = {
//         ...formData
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="title"
//         placeholder="Movie title"
//         onChange={handleFormInputChange}
//       />
//       <input
//         type="text"
//         name="actors"
//         placeholder="Actors"
//         onChange={handleFormInputChange}
//       />
//       <input
//         type="text"
//         name="plot"
//         placeholder="Plot..."
//         onChange={handleFormInputChange}
//       />
//       <input
//         type="text"
//         name="genre"
//         placeholder="Grenre(s)"
//         onChange={handleFormInputChange}
//       />
//       <input
//         type="text"
//         name="imdbRating"
//         placeholder="Rating"
//         onChange={handleFormInputChange}
//       />
//       <input
//         type="text"
//         name="director"
//         placeholder="Director"
//         onChange={handleFormInputChange}
//       />
//       <input
//         type="text"
//         name="year"
//         placeholder="Year"
//         onChange={handleFormInputChange}
//       />
//       <button>Add</button>
//     </form>
//   );
// }