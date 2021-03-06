import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from '../BooksAPI.js';
import BooksList from './BooksList.js';
import * as _ from 'underscore';

class AddBook extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }
  constructor(props){
    super(props);

    this.state = {
      query: '',
      books: []
    };

    this.searchThrottled = _.throttle(this.search, 3000);
  }
  static getDerivedStateFromProps(props, currentState) {
    let books = [...currentState.books];
    books.forEach((book) => {
      const found = props.books.find((myBook) => (
        myBook.id === book.id
      ));
      book.shelf = found ? found.shelf : "none";
    });
    return {
      query: currentState.query,
      books: books
    };
  }
  clearSearch = () => {
    this.setState({
      books: []
    });
  }
  search = (query) => {
    if (query === '') {
      this.clearSearch();
      return;
    }

    BooksAPI.search(query)
      .then((data) => {
        const books = data.error ? [] : data;
        if (query === this.state.query) {
          this.setState({ books });
        }
      });
  }
  handleShelfChange = (book, shelf) => {
    this.props.onShelfChange(book, shelf);
  }
  handleSearchChange = (e) => {
    const query = e.target.value;
    this.setState({ query }, () => {
      this.searchThrottled(this.state.query);
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
              onChange={this.handleSearchChange} />
          </div>
        </div>
        <div className="search-books-results">
          <BooksList
            books={books}
            onShelfChange={this.handleShelfChange} />
        </div>
      </div>
    )
  }
}

export default AddBook;