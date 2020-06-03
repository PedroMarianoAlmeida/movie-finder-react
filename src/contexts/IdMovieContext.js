import React, {createContext, useState} from 'react';

export const IdMovieContext = createContext();

const IdMovieProvider = (props) => {
    
    const [idMovie, setIdMovie] = useState("");

    const newIdMovie = (id) => {
        setIdMovie(id);
        console.log(`ID: ${id}, Context id:${idMovie}`)
    }

    return (
        <IdMovieContext.Provider value={{newIdMovie}}>
            {props.children}
        </IdMovieContext.Provider>
    );
}
 
export default IdMovieProvider;