import React, { Component } from 'react';

class Book extends Component {
  render() {
    const { book } = this.props;
    const bookAuthor = (book.authors.length > 0) && book.authors[0];

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" 
            style={{ 
              width: 128, 
              height: 193, 
              backgroundImage: `url("${book.imageLinks.thumbnail}")` 
              }}>
          </div>
          <div className="book-shelf-changer">
            <select>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read" selected>Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{bookAuthor}</div>
      </div>
    )
  }
}

export default Book;