import React from 'react';
import ShelfChanger from './shelfChanger';
import noCover from '../images/noCoverImage.png';
import PropTypes from 'prop-types';
const Book=props => {
    // book props
    const { book, books, changeShelf } = props;
    // get book title
    const title = book.title ? book.title : 'No title available';
  
    // check book image
    const coverImg =
    book.imageLinks && book.imageLinks.thumbnail
      ? book.imageLinks.thumbnail
      : noCover;
        return (  
            <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${coverImg})` }}></div>
               <ShelfChanger book={book} books={books} changeShelf={changeShelf}/>
              </div>
              <div className="book-title">{title}</div>
              {/* book author name*/
               book.authors && 
             book.authors.map((author, index) => (
            <div className="book-authors" key={index}>
              {author}
            </div>
          ))}
      </div>
            
          </li>
        );
    
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  };
  
 
export default Book;