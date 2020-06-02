import React, {useState, useEffect} from 'react';

const ListMoviesFounded = (props) => {     
    useEffect(() => {
        if (props.name !== "") getMoviesList(props.name);
     }, [props.name]);
    
    async function getMoviesList(name) {
        let response = await fetch(`https://www.omdbapi.com/?s=${name}&apikey=b7da8d63`);
        let data = await response.json()
        console.log(data)
        return data;
    }  

    return (
        <p>{props.name}</p>
    );
}
 
export default ListMoviesFounded;