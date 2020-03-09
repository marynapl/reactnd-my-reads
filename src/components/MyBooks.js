import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BooksList from './BooksList.js';

class MyBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }
  render() {
    const { books } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf books={books}
              category={"currentlyReading"}
              title={"Currently Reading"} />

            <BookShelf books={books}
              category={"wantToRead"}
              title={"Want To Read"} />

            <BookShelf books={books}
              category={"read"}
              title={"Read"} />
          </div>
        </div>
        <Link
          className="open-search"
          to="/search">
          Add a book
        </Link>
      </div>
    )
  }
}

const BookShelf = (props) => {
  const { books, category, title } = props; 
  const showingBooks = (books.length > 0) &&
    (books.filter((book) => (
      book.shelf.toLowerCase() === category.toLowerCase()
    )));

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <BooksList books={showingBooks} />
      </div>
    </div>
  )
}

export default MyBooks;