Create a new react project following the steps in the Repo (https://github.com/dd-code-immersives/movie-project/tree/main)

Create a Component called MovieForm that has the following fields: 
- title
- actors
- plot
- imdbRating
- director 
- year
- date added
(also any other fields you can imagine being useful)

Create a Form that allows the user to insert a new Movie into a table. 

The Movies should be displayed in the table 

- add a delete button for each entry 
- add any other features you can think of that could be useful. 







1) Project Setup:
- Create a new github repo called ReactIntroForm with the following options:
- Clone the repo to your computer and add the link to populi
- cd into the ReactIntroForm directory
- Run 'npx create-react-app .' to initialize react in the repository
- Run 'npm start' after react has finished installing
- If the above worked properly, you should see the react start page on localhost:3000
- Open App.js and replace the App functional component with this code:
- function App() {
return (
<div className="App App-header">

</div>
);
}

2) Creating the <MovieForm/> Component:
- Create a new functional component called MovieForm
- Be sure to include props as the first function parameter and be sure to have a single enclosing <div> tag in the JSX of the return statement
- Add a title to the JSX of the MovieForm component inside the <div></div> tags
- <h1>Movie Form</h1>
- Add <MovieForm/> as a new component inside of the JSX of the <App /> component between the two <div> tags
- <div className="App App-header">
<MovieForm />
</div>
- If you did this right, then on localhost:3000, you should see the heading "Movie Form" on the page

