import React from 'react';
import {BrowserRouter, Route} from "react-router-dom"
import SearchMovieForm from './components/SearchMovieForm';
import IdMovieProvider from './contexts/IdMovieContext';
import MovieDetails from './components/MovieDetails';

function App() {
  document.title = "Movie Finder"
  return (    
    <div className="App">
      <BrowserRouter>

        <IdMovieProvider>

          <Route path="/home" component={SearchMovieForm} />
          <Route path="/details" component={MovieDetails} />

        </IdMovieProvider>

      </BrowserRouter>
    </div>
  );
}

export default App;
