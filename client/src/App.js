import React, { useState } from 'react';
import SavedList from './Movies/SavedList';
import Movies from './Movies/Movie';
import MovieList from './Movies/MovieList';
import { Route, Link, Switch } from 'react-router-dom';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [1] );
  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };
  return (
    <div>
      <SavedList list={savedList}/>
      <Link to='/MovieList/'>Movie List</Link><br/>

      <Route exact path='/MovieList/'>
        <MovieList />
      </Route>

      <Route path="/MovieList/:movieId">
        <Movie />
      </Route>

    </div>
  );
};
 
export default App;
