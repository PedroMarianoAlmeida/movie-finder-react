import React, {useContext, useEffect, useState} from 'react';
import { IdMovieContext }  from './../contexts/IdMovieContext';

const MovieDetails = () => {

  const { idMovie } = useContext(IdMovieContext);

 const [movieDetails, setMovieDatails] = useState("");

  async function getMovieDetails(id) { 
    let response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=ab72c6b9`);
    let data = await response.json();
    console.log(data);
    if(data.Response !== "False") setMovieDatails(data);    
  };

  useEffect( () => {  
    if(!movieDetails) getMovieDetails(idMovie)
  });

  const toRender = () => {
    if(!movieDetails) return <h1>Movie not found!</h1>
    return(
      <h1>{movieDetails.Title}</h1>
    )
  }

  return (
    <div>
      { toRender() }
    </div>
  );
}
 
export default MovieDetails;