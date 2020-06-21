import React, {useContext, useEffect, useState} from 'react';
import { IdMovieContext }  from './../contexts/IdMovieContext';
import { LightDarkModeContext } from '../contexts/LightDarkModeContext';
import useFetch from './../custom-hooks/useFetch';

const MovieDetails = () => {

  const { idMovie } = useContext(IdMovieContext);
  const { isDarkMode } = useContext(LightDarkModeContext);

  const configurationUseFetch = {
    url: "https://www.omdbapi.com/?",
    errorAPIvalue:  [ "Response", "False", "Error"] ,
    parameters: [ {i: idMovie}, {apiKey: "ab72c6b9"} ],
    
    shouldRun: true,
    logResponses: true,

    doWhenInactive: () => <h1 className={`mt-5 pt-3 ${isDarkMode? 'text-white' : '' }`}>Select a movie in HomePage!</h1>,
    doWhenFetching: () => <h3>...Loading</h3>,
    doWhenFail: (error) => <h1 className={`mt-5 pt-3 ${isDarkMode? 'text-white' : '' }`}>Movie not found!</h1>,
    doWhenSuccess: (rawAnswer) => renderWhenSuccess(rawAnswer)
}

const [newMovieDetails, setConfiguration] = useFetch(configurationUseFetch);

 const renderWhenSuccess = (myReturnAPI) => {
  return(
    <div className='mt-5 pt-3 container'>
      <div className='row justify-content-center'>
        <div className="col-12 col-lg-6">
          <h1 className={isDarkMode? 'text-white': ''}>{myReturnAPI.Title} ({myReturnAPI.Year})</h1>
          <p className={isDarkMode? 'text-white': ''}>{myReturnAPI.Plot}</p>
        </div>

        <div className="col-12 col-lg-6 d-flex justify-content-center">
          <img src={myReturnAPI.Poster} alt={`${myReturnAPI.Title} poster`} className="img-thumbnail"/>
        </div>
      </div>
    </div>
  )
 }

  return (
    <div>
      {newMovieDetails}
    </div>
  );
}
 
export default MovieDetails;