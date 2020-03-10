import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI.js';
import BooksList from './BooksList.js';

class AddBook extends Component {
  state = {
    query: '',
    books: []
  }
  handleChange = (e) => {
    const query = e.target.value.trim();
    this.setState(() => ({
      query
    }));

    if(query === '') {
      this.setState(() => ({
        books: []
      }));
      return;
    }

    BooksAPI.search(query)
      .then((data) => {
        const books = data.error
          ? []
          : data;
        if(query === this.state.query) {
          // Update books in the state only if query has not changed
          // This scenario could happen when typing too fast
          this.setState(() => ({
            books
          }));
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }
  render() {
    const { query, books } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" 
              placeholder="Search by title or author"
              value={query}
              onChange={this.handleChange} />
          </div>
        </div>
        <div className="search-books-results">
          <BooksList books={books} /> 
        </div>
      </div>
    )
  }
}

export default AddBook;