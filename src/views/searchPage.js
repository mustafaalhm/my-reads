import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Book from '../components/book';
import * as BooksAPI from '../BooksAPI';

class Search extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  };

  state = {
    query: '',
    resultSearch: [],
    notFound: false
  };

  handelEvent = e => {
    const query = e.target.value;
    this.setState({ query });

    // if user input => run the search
    if (query) {
      BooksAPI.search(query.trim(), 20).then(books => {
        books.length > 0
          ? this.setState({ resultSearch: books, notFound: false })
          : this.setState({ resultSearch: [], notFound: true });
      });

      // if query is empty => reset state to default
    } else this.setState({ resultSearch: [], notFound: false });
  };

  render() {
    const { query, resultSearch, notFound } = this.state;
    const { books, changeShelf } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={this.handelEvent}
            />
          </div>
        </div>
        <div className="search-books-results">
          {resultSearch.length > 0 && (
            <div>
              <h3>Search returned {resultSearch.length} books </h3>
              <ol className="books-grid">
                {resultSearch.map(book => (
                  <Book
                    book={book}
                    books={books}
                    key={book.id}
                    changeShelf={changeShelf}
                  />
                ))}
              </ol>
            </div>
          )}
          {notFound && (
            <h3>there is no any book with this name try again</h3>
          )}
        </div>
      </div>
    );
  }
}
export default Search;
