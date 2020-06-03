import React, {createContext, useState} from 'react';

export const IdMovie = createContext();

const IdMovieProvider = (props) => {
    
    const [idMovie, setIdMovie] = useState()

    return (
        <IdMovie.Provider value={setIdMovie}>
            {props.children}
        </IdMovie.Provider>
    );
}
 
export default IdMovieProvider;