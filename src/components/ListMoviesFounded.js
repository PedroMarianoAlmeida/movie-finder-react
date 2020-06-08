import React, {useState, useEffect, useContext} from 'react';
import { IdMovieContext } from '../contexts/IdMovieContext';
import { NavLink } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';

const ListMoviesFounded = (props) => {     
    const [movieList, setMovieList] = useState([]);
    const [responseAPI, setResponseAPI] = useState(null);

    const { newIdMovie } = useContext(IdMovieContext);
    
    useEffect(() => {
        if (props.name !== "") getMoviesList(props.name);
     }, [props.name]);
    
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
        <div>
            {toRender()}
        </div>
    );
}
 
export default ListMoviesFounded;