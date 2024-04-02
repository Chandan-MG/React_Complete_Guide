
import './App.css';
import React, { useState } from 'react';
import MovieList from './Components/MovieList';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchMoviesHandler(){
    setIsLoading(true);
    const response = await fetch('https://swapi.dev/api/films/');
    const data = await response.json();
    
    const transformMovies = data.results.map(moviedata =>{
        return{
          id: moviedata.episode_id,
          title: moviedata.title,
          releaseDate: moviedata.release_date,
          openingText: moviedata.opening_crawl
        }
    })
    setMovies(transformMovies);
    setIsLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {isLoading&&<p>Loading.......</p>}
        {!isLoading && movies.length > 0 && <MovieList movies={movies} />}
      </section>
    </React.Fragment>
  );
}

export default App;

