import React, {useState, useEffect, useContext} from 'react';
import { IdMovieContext } from '../../contexts/IdMovieContext';
import { NavLink } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import { NameToSearchContext } from '../../contexts/NameToSearchContext';

const ListMoviesFounded = () => {     
    const [movieList, setMovieList] = useState([]);
    const [responseAPI, setResponseAPI] = useState(null);

    const { nameToSearch } = useContext(NameToSearchContext);
    const { newIdMovie } = useContext(IdMovieContext);
    
    useEffect(() => {
        if ( nameToSearch !== "") getMoviesList(nameToSearch);
     }, [nameToSearch]);
    
    async function getMoviesList(name) {
        let response = await fetch(`https://www.omdbapi.com/?s=${name}&apikey=ab72c6b9`);
        let data = await response.json()
        setResponseAPI(data.Response)
        if(data.Response === "True") setMovieList(data.Search);
        console.log(data)
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
        </div>
    );
}
 
export default ListMoviesFounded;