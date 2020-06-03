import React from 'react';
import SearchMovieForm from './components/SearchMovieForm';
import IdMovieProvider from './contexts/IdMovieContext';

function App() {
  document.title = "Movie Finder"
  return (    
    <div className="App">
      
      <IdMovieProvider>
        <SearchMovieForm />
      </IdMovieProvider>

    </div>
  );
}

export default App;
