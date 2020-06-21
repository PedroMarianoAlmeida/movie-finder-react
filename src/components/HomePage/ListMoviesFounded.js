import React, {useState, useEffect, useContext} from 'react';
import { IdMovieContext } from '../../contexts/IdMovieContext';
import { NavLink } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import { NameToSearchContext } from '../../contexts/NameToSearchContext';
import useFetch from './../../custom-hooks/useFetch';

const ListMoviesFounded = () => {   
    const { nameToSearch } = useContext(NameToSearchContext);
    const { newIdMovie } = useContext(IdMovieContext);

    const configurationUseFetch = {
        url: "https://www.omdbapi.com/?",
        errorAPIvalue:  [ "Response", "False", "Error"] ,
        
        shouldRun: false,
        logResponses: true,

        doWhenInactive: () => <h3>Enter a name to search above</h3>,
        doWhenFetching: () => <h3>...Loading</h3>,
        doWhenFail: (error) => <h4>Movie not founded</h4>,
        doWhenSuccess: (rawAnswer) => renderWhenSuccess(rawAnswer)
    }
    const [newMovieList, setConfiguration] = useFetch(configurationUseFetch)

    const renderWhenSuccess = (myReturnAPI) => {
        console.log( myReturnAPI.Search );
        
        return(
            <Carousel>
                {myReturnAPI.Search.map( movie => {
                    return (
                        <Carousel.Item key={movie.imdbID}>
                        <NavLink to="/details">                                
                                <img className="" src={movie.Poster} alt={`${movie.Title} poster`} id={movie.imdbID} onClick={handleClick}/>
                            </NavLink> 
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        )
        
    }

    const handleClick = (e) => {
        //console.log(e.target.id);
        newIdMovie(e.target.id);
    }

    useEffect(() => {
        if ( nameToSearch !== "") {            
            configurationUseFetch.parameters = [ {s: nameToSearch}, {apiKey: "ab72c6b9"} ];
            configurationUseFetch.shouldRun = true;
            setConfiguration(configurationUseFetch);
        }
     }, [nameToSearch]);   

    return (
        <div className="d-flex justify-content-center">           
            {newMovieList}
        </div>
    );
}
 
export default ListMoviesFounded;