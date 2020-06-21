import React, {useState, useEffect, useContext} from 'react';
import { IdMovieContext } from '../../contexts/IdMovieContext';
import { NavLink } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import { NameToSearchContext } from '../../contexts/NameToSearchContext';
import useFetch from './../../custom-hooks/useFetch';

const ListMoviesFounded = () => {     
    const [movieList, setMovieList] = useState([]);
    const [responseAPI, setResponseAPI] = useState(null);

    const { nameToSearch } = useContext(NameToSearchContext);
    const { newIdMovie } = useContext(IdMovieContext);

    const configurationUseFetch = {
        url: "https://www.omdbapi.com/?",
        errorAPIvalue:  [ "Response", "False", "Error"] ,
        
        shouldRun: false,
        logResponses: true,

        doWhenInactive: () => <h3>Enter a name to search above</h3>,
        doWhenFetching: () => <h3>...Loading</h3>,
        doWhenFail: () => <h3>Movie not founded</h3>,
        doWhenSuccess: (rawAnswer) => <h3>{JSON.stringify(rawAnswer)}</h3>
    }

    const [newMovieList, setConfiguration] = useFetch(configurationUseFetch)
    
    useEffect(() => {
        if ( nameToSearch !== "") {
            getMoviesList(nameToSearch);
            
            configurationUseFetch.parameters = [ {s: nameToSearch}, {apiKey: "ab72c6b9"} ];
            configurationUseFetch.shouldRun = true;
            setConfiguration(configurationUseFetch);
        }
     }, [nameToSearch]);
    
    async function getMoviesList(name) {
        let response = await fetch(`https://www.omdbapi.com/?s=${name}&apikey=ab72c6b9`);
        let data = await response.json()
        setResponseAPI(data.Response)
        if(data.Response === "True") setMovieList(data.Search);
    }
    
    const handleClick = (e) => {
        console.log(e.target.id);
        newIdMovie(e.target.id);
    }

    const toRender = () => {
        if(responseAPI === 'False') { return(<h4>Movie not found!</h4>) };
        return (
            <Carousel>
                {movieList.map( movie => {
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
    
    return (
        <div className="d-flex justify-content-center">
            {toRender()}

            {newMovieList}
        </div>
    );
}
 
export default ListMoviesFounded;