import React, {useState, useEffect} from 'react';

const ListMoviesFounded = (props) => {     
    const [movieList, setMovieList] = useState([]);
    const [responseAPI, setResponseAPI] = useState(null);
    
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

    const toRender = () => {
        if(responseAPI === 'False') { return(<li>Movie not found!</li>) };
        return movieList.map( movie =>  <li key={movie.imdbID} > {movie.Title} </li> );
    }
    
    return (
        <ul>
            {toRender()}
        </ul>
    );
}
 
export default ListMoviesFounded;