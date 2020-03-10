import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MyBooks from './components/MyBooks.js';
import AddBook from './components/AddBook.js';
import * as BooksAPI from './BooksAPI.js';
import './App.css';

class BooksApp extends Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
        console.log("My books", books);
      })
  }
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MyBooks books={this.state.books} />
        )} />
        <Route path='/search' render={() => (
          <AddBook />
        )} />
      </div>
    )
  }
}

export default BooksApp;
