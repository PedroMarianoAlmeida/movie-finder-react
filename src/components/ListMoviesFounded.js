import React, {useState, useEffect, useContext} from 'react';
import { IdMovieContext } from '../contexts/IdMovieContext';
import { NavLink } from 'react-router-dom'

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
        if(responseAPI === 'False') { return(<li>Movie not found!</li>) };
        return movieList.map( movie =>  { 
            return (
                <NavLink to="/details" key={movie.imdbID}>
                    <li id={movie.imdbID} onClick={handleClick}>
                        {movie.Title}
                    </li>
                </NavLink>
            )});
    }
    
    return (
        <ul>
            {toRender()}
        </ul>
    );
}
 
export default ListMoviesFounded;