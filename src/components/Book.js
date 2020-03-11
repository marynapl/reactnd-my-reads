import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }
  handleChange = (e) => {
    this.props.onShelfChange(this.props.book, e.target.value);
  }
  render() {
    const { book } = this.props;
    const title = book.title ? book.title : "";
    const shelf = book.shelf ? book.shelf : "none";
    const author = book.authors &&
      book.authors.length > 0 &&
      book.authors[0];
    const thumbnail = book.imageLinks &&
      book.imageLinks.thumbnail &&
      book.imageLinks.thumbnail;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${thumbnail}")`
            }}>
          </div>
          <div className="book-shelf-changer">
            <select
              value={shelf}
              onChange={this.handleChange}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{author}</div>
      </div>
    )
  }
}

export default Book;