import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBook from './components/listBook'
import * as BooksAPI from './BooksAPI';
import Search from './views/searchPage';

import {Switch, Route , Link} from 'react-router-dom'
import Footer from './components/footer';
class BooksApp extends React.Component {
  state = { books: [] };

  componentDidMount() {
    // get books on load
    BooksAPI.getAll().then(books => this.setState({ books }));
  }
  changeShelf = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf).then(response => {
      // set shelf for new or updated book
      changedBook.shelf = shelf;
      // update state with changed book
      this.setState(prevState => ({
        books: prevState.books
          // remove updated book from array
          .filter(book => book.id !== changedBook.id)
          // add updated book to array
          .concat(changedBook)
      }));
    });
  };

  render() {
    const {books} = this.state;
    return (
      <div className="app">
        <Switch>
          <Route
            path="/search"
            render={() => (
              <Search books={books} changeShelf={this.changeShelf} />
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <ListBook books={books} changeShelf={this.changeShelf} />
                <div className="open-search">
                  <Link to="/search" className="open-search"></Link>
                </div>
              </div>
            )}
          />
          
        </Switch>
        <Footer/>
      </div>
    )
  }
}

export default BooksApp
