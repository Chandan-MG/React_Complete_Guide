
import './App.css';
import React, { useCallback, useEffect, useState } from 'react';
import MovieList from './Components/MovieList';
import MovieInput from './Components/MovieInput/MovieInput';

// import '../node_modules/react-bootstrap/dist/react-bootstrap';

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
      const response = await fetch('https://react-complete-guide-715a3-default-rtdb.firebaseio.com/movies.json');
      if(!response.ok){
        throw new Error("Something went wrong ....Retrying")
      }
      const data = await response.json();

      const LoadedMovies = [];

      for(const key in data){
        LoadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].opening_crawl,
          releaseDate: data[key].date
        })
      }
      
      setMovies(LoadedMovies);
      
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

