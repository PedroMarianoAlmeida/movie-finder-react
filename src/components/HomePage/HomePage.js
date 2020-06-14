import React from 'react';

import SearchMovieForm from './SearchMovieForm';
import ListMoviesFounded from './ListMoviesFounded';
import NameToSearchProvider from './../../contexts/NameToSearchContext'

const HomePage = () => {
    return (
        <NameToSearchProvider>
            <div className='mt-5 pt-3 container'>
                <div className='row justify-content-center'>                   
                    
                    <SearchMovieForm />    
                    <ListMoviesFounded />
                                       
                </div>
            </div>
        </NameToSearchProvider>

      );
}
 
export default HomePage;