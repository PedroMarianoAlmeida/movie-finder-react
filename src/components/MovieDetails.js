import React, {useContext} from 'react';
import { IdMovieContext}  from './../contexts/IdMovieContext';

const MovieDetails = () => {

  const { idMovie } = useContext(IdMovieContext);
  
    return (
      
    <h1> { idMovie } </h1>

      );
}
 
export default MovieDetails;