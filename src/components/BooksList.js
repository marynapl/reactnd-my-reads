import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book.js';

function BooksList(props) {
  const handleShelfChange = (book, shelf) => {
    props.onShelfChange(book, shelf);
  }
  const { books } = props;
  return (
    <ol className="books-grid">
      {books.length > 0 && books.map((book) => (
        <li key={book.id}>
          <Book
            book={book}
            onShelfChange={handleShelfChange}
          />
        </li>
      ))}
    </ol>
  )
}

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired
}

export default BooksList;