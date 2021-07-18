import React from 'react';
import Book from './book';
import PropTypes from 'prop-types';
class Shelf extends React.Component {
    
    render() { 
        const { books, changeShelf } = this.props;

        return (
            <ol className="books-grid">
                {books.map(book =>(
                    <Book 
                        book ={book}
                        books ={books}
                        key={book.id}
                       changeShelf={changeShelf}
                    />
                ))}
           
           </ol>
          );
    }
}
Shelf.propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  };
export default Shelf;