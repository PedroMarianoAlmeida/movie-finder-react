import React from 'react';
import {BrowserRouter, Route} from "react-router-dom"
import SearchMovieForm from './components/SearchMovieForm';
import IdMovieProvider from './contexts/IdMovieContext';
import MovieDetails from './components/MovieDetails';
import Header from './components/Header/Header';
import About from './components/About';
import Footer from './components/Header/Footer';
import LightDarkModeProvider from './contexts/LightDarkModeContext';

function App() {
  document.title = "Movie Finder"
  return (    
    <div className="App">
      <div>
        
        <BrowserRouter>
          <LightDarkModeProvider>
            <Header />
            <IdMovieProvider>                 
                                          
              <Route path="/" exact component={SearchMovieForm} />
              <Route path="/details" component={MovieDetails} />
              <Route path="/about" component={About} />                
                  
            </IdMovieProvider>
            <Footer />
            </LightDarkModeProvider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
