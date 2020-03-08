import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MyBooks from './components/MyBooks.js';
import AddBook from './components/AddBook.js';
// import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MyBooks />
        )} />
        <Route path='/search' render={() => (
          <AddBook />
        )} />
      </div>
    )
  }
}

export default BooksApp;
