import React, { Component } from 'react';
import BooksList from './BooksList.js';

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

export default BookShelf;