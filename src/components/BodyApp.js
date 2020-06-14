import React from 'react';
import { useContext } from 'react';
import {BrowserRouter, Route} from "react-router-dom"

import IdMovieProvider from './../contexts/IdMovieContext'
import { LightDarkModeContext } from './../contexts/LightDarkModeContext';
import NameToSearchProvider from './../contexts/NameToSearchContext';

import HomePage from './HomePage/HomePage';
import MovieDetails from './MovieDetails';
import Header from './Header/Header';
import About from './About';
import Footer from './Header/Footer';

const BodyApp = () => {
    const { isDarkMode } = useContext(LightDarkModeContext);
    
    return ( 
      <div className={`${isDarkMode? 'bg-secondary h-100': ''}`}>
          <BrowserRouter>          
              <Header />
              <IdMovieProvider>                 
                
                <NameToSearchProvider>                       
                  <Route path="/" exact component={HomePage} />
                </NameToSearchProvider>

                <Route path="/details" component={MovieDetails} />
                <Route path="/about" component={About} />                
                    
              </IdMovieProvider>
              <Footer />            
          </BrowserRouter>
      </div>
     );
  }

  export default BodyApp;