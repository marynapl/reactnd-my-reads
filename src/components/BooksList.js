import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book.js';

class BooksList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }
  handleShelfChange = (book, shelf) => {
    this.props.onShelfChange(book, shelf);
  }
  render() {
    const { books } = this.props;

    return (
      <ol className="books-grid">
        {books.length > 0 && books.map((book) => (
          <li key={book.id}>
            <Book
              book={book}
              onShelfChange={this.handleShelfChange}
            />
          </li>
        ))}
      </ol>
    )
  }
}

export default BooksList;