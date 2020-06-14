import React, { useContext } from 'react';

import { NameToSearchContext } from './../../contexts/NameToSearchContext'

import SearchMovieForm from './SearchMovieForm';
import ListMoviesFounded from './ListMoviesFounded';
import NewSearch from './NewSearch';

const HomePage = () => {
    const { nameToSearch } = useContext( NameToSearchContext );

    return (
        
            <div className='mt-5 pt-3 container'>
                <div className='row justify-content-center'>                   
                    <div className="col-12">
                        {nameToSearch === "" ? <SearchMovieForm /> : <NewSearch />}
                    </div>

                    <div className="col-12">    
                        <ListMoviesFounded />
                    </div>
                                       
                </div>
            </div>
        

      );
}
 
export default HomePage;