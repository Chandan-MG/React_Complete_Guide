
import './App.css';
import React, { useCallback, useEffect, useState } from 'react';
import MovieList from './Components/MovieList';
import MovieInput from './Components/MovieInput/MovieInput';

import '../node_modules/react-bootstrap/dist/react-bootstrap.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, seterror] = useState(null);

  

  const fetchMoviesHandler = useCallback(async () =>{
    setIsLoading(true);
    seterror(null);
    try{
      const response = await fetch('https://swapi.dev/api/films/');
      if(!response.ok){
        throw new Error("Something went wrong ....Retrying")
      }
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
      
    }catch(error){
      seterror(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(()=>{
    fetchMoviesHandler();
  },[fetchMoviesHandler]);

  return (
    <React.Fragment>
      <section>
        <MovieInput />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {isLoading&&<p>Loading.......</p>}
        {!isLoading && movies.length > 0 && <MovieList movies={movies} />}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;

