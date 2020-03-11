import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BooksList from './BooksList.js';

class MyBooks extends Component {
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
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf books={books}
              category={"currentlyReading"}
              title={"Currently Reading"}
              onShelfChange={this.handleShelfChange} />

            <BookShelf books={books}
              category={"wantToRead"}
              title={"Want To Read"}
              onShelfChange={this.handleShelfChange} />

            <BookShelf books={books}
              category={"read"}
              title={"Read"}
              onShelfChange={this.handleShelfChange} />
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

class BookShelf extends Component {
  handleShelfChange = (book, shelf) => {
    this.props.onShelfChange(book, shelf);
  }
  render() {
    const { books, category, title } = this.props;
    const showingBooks = books.length === 0 ? []
      : (books.filter((book) => (
        book.shelf.toLowerCase() === category.toLowerCase()
      )));

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <BooksList
            books={showingBooks}
            onShelfChange={this.handleShelfChange}
          />
        </div>
      </div>
    )
  }
}

export default MyBooks;